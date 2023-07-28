import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import SaveCardScreen from '../screens/SaveCardScreen/SaveCardScreen.jsx'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
            iconName = focused ? 'cards' : 'cards-outline'
          } else if (rn === 'Form Matching') {
            iconName = focused
              ? require('../assets/E-Lara/card.png')
              : require('../assets/E-Lara/card_fill.png')
          } else if (rn === 'SaveCard') {
            iconName = focused ? 'cards-heart' : 'cards-heart-outline'
          } else if (rn === 'Profile') {
            iconName = focused ? 'account' : 'account-outline'
          }

          return (
            <MaterialCommunityIcons name={iconName} size={29} color={color} />
          )
        },
        activeTintColor: 'white',
        tabBarStyle: {
          height: 65,
          margin: 10,
          position: 'absolute',
          borderRadius: 16,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#A460ED',
      })}
    >
      <Tab.Screen name="Beranda" component={HomeScreen} />
      {/* <Tab.Screen name="Form Matching" component={FormMatching} /> */}
      <Tab.Screen name="SaveCard" component={SaveCardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigationBar
