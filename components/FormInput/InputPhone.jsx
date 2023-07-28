import React from 'react'
import PhoneInput from 'react-native-phone-number-input'

const InputPhone = (props) => {
  return (
    <PhoneInput
      defaultValue={props.defaultValue}
      defaultCode="ID"
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      containerStyle={props.containerStyle}
    />
  )
}

export default InputPhone
