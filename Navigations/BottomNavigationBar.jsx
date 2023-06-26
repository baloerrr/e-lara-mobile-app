import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import MatchingScreen from '../screens/MatchingScreen/MatchingScreen.jsx'
import DonateScreen from '../screens/DonateScreen/DonateScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import FormMatching from '../screens/FormMatching/FormMatching.jsx'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === 'Home2') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'FormMatching') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'Donate') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: 'grey',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          backgroundColor: '#000322',
        },
      })}
    >
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FormMatching"
        component={FormMatching}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigationBar
