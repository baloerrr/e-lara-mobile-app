import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={require('../../assets/E-Lara/back.png')} {...props} />
    </TouchableOpacity>
  )
}

export default Header
