import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderComponent = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 355,
          paddingTop: 20,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri:
                'https://images.squarespace-cdn.com/content/v1/5e1c5d714316850ed6da863a/1615287646326-6O3BQGGU4IWUQX07C3RD/Neymar.jpg?format=1500w',
            }}
            style={{
              width: 55,
              height: 55,
              borderRadius: 30,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>E-LARA</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/E-Lara/logo.png')}
            style={{
              width: 60,
              height: 60,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderComponent
