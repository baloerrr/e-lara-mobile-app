import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/AuthProvider'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const { logout } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <View>
      <Text>HomeScayash</Text>
      <Button
        title="Go"
        onPress={() => {
          navigation.navigate('Landing')
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          logout()
        }}
      />
    </View>
  )
}

export default HomeScreen
