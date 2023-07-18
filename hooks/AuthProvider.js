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
    const [title, setTitle] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [isWarning, setIsWarning] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)


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
  
      if (!email || !password || !namaLengkap || !tempatLahir || !tanggalLahir || !noHandphone) {
        setIsWarning(true)
        setTitle('Peringatan')
        setMessage('Input tidak boleh kosong')
        setModalVisible(true)
        return
      }
    
      setIsLoading(true);
  
      try {
        const authResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const timestamps = firebase.firestore.FieldValue.serverTimestamp()
        const user = authResult.user;

        await user.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://e-lara-6b5ba.firebaseapp.com',
        });

        await firebase.firestore().collection('users').doc(user.uid).set({
          namaLengkap,
          email,
          tempatLahir,
          tanggalLahir,
          noHandphone,
          createdAt: timestamps 
        });

        setIsSuccess(true)
        setTitle('Success')
        setMessage('Daftar Berhasil. Verifikasi dikirim melalui email')
        setModalVisible(true)
        setIsLoading(false);
      } catch (error) {
        if (error.code === 'auth/weak-password') {
          setIsError(true)
          setTitle('Gagal')
          setMessage('Kata sandi terlalu lemah');
          setModalVisible(true);
        } else if (error.code === 'auth/email-already-in-use') {
          setIsError(true)
          setTitle('Gagal')
          setMessage('Email sudah digunakan');
          setModalVisible(true);
        } else {
          setIsError(true)
          setTitle('Gagal')
          setMessage('Terjadi kesalahan saat mendaftar');
          setModalVisible(true);
        }
        setModalVisible(true)
        setIsLoading(false);
      }
    };
    

    const login = (email, password) => {
      setIsLoading(true)
      if (email == '' || password == '') {
        setIsWarning(true)
        setTitle('Peringatan')
        setMessage('Input tidak boleh kosong')
        setModalVisible(true)
      } else {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
          const user = res.user
          
          if (user.emailVerified) {
            setIsLoading(false)
            // setIsSuccess(true)
            // setTitle('Berhasil')
            // setMessage('Login Berhasil')
            // setModalVisible(true)
            setUser(user)
          } else {
            firebase.auth().signOut()
            setIsWarning(true)
            setTitle('Peringatan')
            setMessage('Email belum terverifikasi. Silakan verifikasi email Anda.')
            setModalVisible(true)
          }
    
        }).catch(error => {
          if (error.code === 'auth/invalid-email') {
            setIsError(true)
            setTitle('Gagal')
            setMessage('Email tidak valid')
            setModalVisible(true)
          } else if (error.code === 'auth/wrong-password') {
            setIsError(true)
            setTitle('Gagal')
            setMessage('Password Salah')
            setModalVisible(true)
          } else {
            setIsError(true)
            setTitle('Gagal')
            setMessage('Terjadi kesalahan saat login')
            setModalVisible(true)
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
      promptAsync,
      title,
      isError,
      isSuccess,
      isWarning, 
      setIsSuccess
    }

  return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}