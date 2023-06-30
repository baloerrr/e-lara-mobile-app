import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import DonateScreen from '../screens/DonateScreen/DonateScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import FormMatching from '../screens/FormMatching/FormMatching.jsx'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === 'Beranda') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'Form Matching') {
            iconName = focused ? 'puzzle' : 'puzzle-outline'
          } else if (rn === 'Donasi') {
            iconName = focused ? 'gift' : 'gift-outline'
          } else if (rn === 'Profile') {
            iconName = focused ? 'account' : 'account-outline'
          }

          return <Ionicons name={iconName} size={32} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: 'grey',
        tabBarStyle: {
          height: 65,
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
        name="Beranda"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Form Matching"
        component={FormMatching}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Donasi"
        component={DonateScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigationBar
