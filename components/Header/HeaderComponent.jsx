import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderComponent = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#3F4BF2',
        padding: 10,
        paddingRight: 15,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#E4E4E4',
        }}
      >
        {props.title}
      </Text>
    </View>
  )
}

export default HeaderComponent
