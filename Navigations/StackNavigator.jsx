import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '../screens/LandingScreen/LandingScreen.jsx'
import LoginScreen from '../screens/LoginScreen/LoginScreen.jsx'
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen.jsx'
import MatchingScreen from '../screens/MatchingScreen/MatchingScreen.jsx'
import DonateScreen from '../screens/DonateScreen/DonateScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import { AuthContext } from '../hooks/AuthProvider'
import BottomNavigationBar from './BottomNavigationBar.jsx'
import CobaanScreen from '../screens/CobaanScreen/CobaanScreen.jsx'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const { user, token } = useContext(AuthContext)
  return (
    <Stack.Navigator>
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
            component={DonateScreen}
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
          <Stack.Screen
            name="Percobaan"
            component={CobaanScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
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
