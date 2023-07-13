import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import DonateScreen from '../screens/DonateScreen/DonateScreen.jsx'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen.jsx'
import FormMatching from '../screens/FormMatching/FormMatching.jsx'

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
            iconName = focused
              ? require('../assets/E-Lara/card.png')
              : require('../assets/E-Lara/card_fill.png')
          } else if (rn === 'Form Matching') {
            iconName = focused
              ? require('../assets/E-Lara/card.png')
              : require('../assets/E-Lara/card_fill.png')
          } else if (rn === 'Donasi') {
            iconName = focused
              ? require('../assets/E-Lara/love.png')
              : require('../assets/E-Lara/love_fill.png')
          } else if (rn === 'Profile') {
            iconName = focused
              ? require('../assets/E-Lara/profile.png')
              : require('../assets/E-Lara/profile_fill.png')
          }

          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={{
                width: 22,

                height: 22,
                tintColor: color,
              }}
            />
          )
        },
        activeTintColor: '#3F4BF2',
        tabBarStyle: {
          height: 65,
          margin: 10,
          position: 'absolute',
          borderRadius: 16,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Beranda" component={HomeScreen} />
      {/* <Tab.Screen name="Form Matching" component={FormMatching} /> */}
      <Tab.Screen name="Donasi" component={DonateScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigationBar
