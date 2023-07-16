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

    const register = async (registerData) => {
      const { email, password, namaLengkap, tempatLahir, tanggalLahir, noHandphone} = registerData;
  
      setIsLoading(true);
  
      try {
        const authResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const timestamps = firebase.firestore.FieldValue.serverTimestamp()
        const user = authResult.user;

        // const response = await fetch(imageUri)
        // const blob = await response.blob()

        // // const filename = imageUri.substring(imageUri.lastIndexOf('/')+1)
        // const storageRef = firebase.storage().ref().child(`user_images/${user.uid}`)
    
        // await storageRef.put(blob)
        // const downloadUrl = await storageRef.getDownloadURL()
  
        await user.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://e-lara-6b5ba.firebaseapp.com',
        });
  
        Alert.alert('Email Verification was sent');
        await firebase.firestore().collection('users').doc(user.uid).set({
          namaLengkap,
          email,
          tempatLahir,
          tanggalLahir,
          noHandphone,
          // gambarUrl: downloadUrl,
          createdAt: timestamps 
        });
  
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };
    

    const login = (email, password) => {
      setIsLoading(true)
      if(email == '' || password == '') {
        setModalVisible(true)
        setMessage('Input tidak boleh kosong')
      }  else {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            setIsLoading(false)
            const user = res.user

            if(user.emailVerified) {
              setUser(user)
              Alert.alert("Success", "Login Berhasil")
            } else {
              firebase.auth().signOut();
              setMessage('Email belum terverifikasi. Silakan verifikasi email Anda.');
              setModalVisible(true);
            }

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

    const resetPassword = async(email) => {
      if(email != null) {
        await firebase.auth().sendPasswordResetEmail(email).then(() => {
          Alert.alert('Reset password sudah dikirim melalui email')
        })
      } else {
        Alert.alert('Masukkan email yang valid')
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
      setUser,
      message, 
      modalVisible,
      setModalVisible,
      isLoading,
      setIsLoading,
      register,
      resetPassword,
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