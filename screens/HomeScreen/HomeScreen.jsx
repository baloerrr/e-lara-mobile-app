import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/AuthProvider'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const { logout } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <View>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  )
}

export default HomeScreen
