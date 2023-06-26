import {Alert} from 'react-native'
import React, {useState, createContext, useEffect} from 'react'
import {authServices} from './../constants/service'
import {firebase} from '../firebase'
import * as Google from 'expo-auth-session/providers/google'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: authServices.androidClientId,
        iosClientId: authServices.iosClientId,
        expoClientId: authServices.expoClientId,
        webClientId: authServices.webClientId,
      })     

    useEffect(() => {
        if (response?.type === 'success') {
          setToken(response.authentication.accessToken)
          getUser()
        }
    }, [response, token])

    const login = (email, password) => {
      setIsLoading(true)
      if(email == '' || password == '') {
        setModalVisible(true)
        setMessage('Input tidak boleh kosong')
      }  else {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            setIsLoading(false)
            setUser(res.user)
            Alert.alert("Success", "Login Berhasil")
        }).catch(error => {
          if (error.code === 'auth/invalid-email') {
            setMessage('Email tidak valid');
          } else if (error.code === 'auth/wrong-password') {
            setMessage('Password salah');
          } else {
            setMessage('Terjadi kesalahan saat login');
          }
          setModalVisible(true)
          setIsLoading(false)
        }) 
      }
        
    }

    const getUser = async (token) => {
        try {
            const response = await fetch(
              "https://www.googleapis.com/userinfo/v2/me",
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            const user = await response.json();
            setUser(user);
          } catch (error) {
            Alert.alert("error", error.message)
          }
    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
          setUser(null)
          Alert.alert("Logout Berhasil")
        }).catch(error => {
          console.log(error.message);
        })
    }

    const authContextValue = {
      user, 
      message, 
      modalVisible,
      setModalVisible,
      isLoading,
      setIsLoading,
      login, 
      logout, 
      getUser, 
      token, 
      promptAsync
    }

  return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}