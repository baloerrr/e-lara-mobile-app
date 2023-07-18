import { View, Text } from 'react-native'
import React from 'react'
import useCustomFonts from '../../hooks/useCustomFonts'

const HeaderComponent = (props) => {
  const fontsLoaded = useCustomFonts()

  if (!fontsLoaded) {
    return null
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          color: '#A460ED',
          textAlign: 'left',
          fontFamily: 'Modernist-Bold',
        }}
      >
        {props.title}
      </Text>
    </View>
  )
}

export default HeaderComponent
