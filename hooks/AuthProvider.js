import { Alert } from 'react-native'
import React, {useState, createContext, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            setUser(res.user)
        }).catch((error) => {
            Alert.alert("Oops", error.message)
        })
    }

    // const googleLogin = async (token) => {
    //     try {
    //         const response = await fetch(
    //           "https://www.googleapis.com/userinfo/v2/me",
    //           {
    //             headers: { Authorization: `Bearer ${token}` },
    //           }
    //         );
      
    //         const user = await response.json();
    //         setUser(user);
    //       } catch (error) {
    //         Alert.alert("error", error.message)
    //       }
    // }

    const logout = () => {
        signOut(auth).then(() => {
            Alert.alert("Success", "Sign out success")
            setUser(null)
        }).then((error) => {
            Alert.alert("Oops", error)
        })
    }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}