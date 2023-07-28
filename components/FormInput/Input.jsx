import { TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      style={props.style}
      keyboardType={props.keyboardType}
    />
  )
}

export default Input
