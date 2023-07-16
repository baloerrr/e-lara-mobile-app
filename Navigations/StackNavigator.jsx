import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '../screens/LandingScreen/LandingScreen.jsx'
import LoginScreen from '../screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen.jsx'
import MatchingScreen from '../screens/MatchingScreen/MatchingScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import { AuthContext } from '../hooks/AuthProvider'
import BottomNavigationBar from './BottomNavigationBar.jsx'
import SaveCardScreen from '../screens/SaveCardScreen/SaveCardScreen.jsx'
import OnBoardingScreen from '../screens/OnBoardingScreen/OnBoardingScreen.jsx'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const { user, token } = useContext(AuthContext)
  const [isFirstLaunched, setIsFirstLaunched] = useState(null)
  let routeName

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunched(true)
      } else {
        setIsFirstLaunched(false)
      }
    })
  }, [])

  if (isFirstLaunched === null) {
    return null
  } else if (isFirstLaunched == true) {
    routeName = 'OnBoarding'
  } else {
    routeName = 'Landing'
  }

  const checkAsyncStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)

      items.forEach(([key, value]) => {
        console.log(`Key: ${key}, Value: ${value}`)
      })
    } catch (error) {
      console.warn('Error checking AsyncStorage:', error)
    }
  }

  checkAsyncStorage()

  // const resetApp = async () => {
  //   try {
  //     await AsyncStorage.removeItem('alreadyLaunched')
  //     setIsFirstLaunched(true)
  //   } catch (error) {
  //     console.warn('Error resetting app:', error)
  //   }
  // }

  // // Panggil fungsi resetApp untuk mereset aplikasi (hapus AsyncStorage)
  // resetApp()

  return (
    <Stack.Navigator initialRouteName={routeName}>
      {user || token ? (
        <>
          <Stack.Screen
            name="Home"
            component={BottomNavigationBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Matching"
            component={MatchingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Donate"
            component={SaveCardScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator
