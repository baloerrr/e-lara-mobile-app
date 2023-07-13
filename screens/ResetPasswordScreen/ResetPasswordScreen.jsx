import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../hooks/AuthProvider'
import HeaderBack from '../../components/Header/HeaderBack'
import { firebase } from '../../firebase'

const ResetPasswordScreen = () => {
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  const [email, setEmail] = useState('')

  const { resetPassword } = useContext(AuthContext)
  return (
    <SafeAreaView>
      <View
        style={{
          height: height,
          width: width,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ position: 'absolute', top: 0, left: 0, padding: 20 }}>
          <HeaderBack />
        </View>
        <View>
          <TextInput
            placeholder="Masukkan email yang valid"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={{
              paddingVertical: 7,
              paddingHorizontal: 10,
              backgroundColor: '#f8faf9',
              borderRadius: 10,
              width: 320,
              height: 55,
              fontSize: 15,
              marginBottom: 20,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={resetPassword}
            style={{
              paddingVertical: 7,
              width: 320,
              height: 55,
              borderRadius: 4,
              elevation: 3,
              backgroundColor: 'orange',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 17,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
              }}
            >
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen
