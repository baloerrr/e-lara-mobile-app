import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../LandingScreen/LandingScreen'
import { AuthContext } from '../../hooks/AuthProvider'
import { authServices } from '../../constants/service'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { makeRedirectUri } from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession()

const LandingScreen = () => {
  const navigation = useNavigation()

  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)
  const { logout } = useContext(AuthContext)

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: authServices.androidClientId,
    iosClientId: authServices.iosClientId,
    expoClientId: authServices.expoClientId,
    webClientId: authServices.webClientId,
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken)
      getUser()
    }
  }, [response, token])

  const getUser = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      const user = await response.json()
      setUser(user)
    } catch (error) {
      Alert.alert('error', error.message)
    }
  }

  const showUser = () => {
    if (user) {
      return (
        <View>
          <Text>Welcome {user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      )
    }
  }

  const loginNavigate = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Wujudkan <Text style={styles.textOrange}>Impian Pendidikanmu</Text>
            {'\n'} Bersama Kami
          </Text>
          <Text style={styles.spanTitle}>
            Ikuti kami untuk menemukan Beasiswa Impianmu
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={loginNavigate}
            style={styles.buttonBlack}
          >
            <Text style={styles.textButtonBlack}>LANJUTKAN</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonBlue}>
            <Text style={styles.textButtonBlue}>LANJUTKAN DENGAN FACEBOOK</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={
              token
                ? getUser
                : () => promptAsync({ useProxy: false, showInRecents: true })
            }
            style={styles.buttonGray}
          >
            <Text style={styles.textButtonGray}>LANJUTKAN DENGAN GOOGLE</Text>
          </TouchableHighlight>
          <View>
            {showUser()}
            <Button
              title={token ? 'get user data' : 'Login'}
              onPress={
                token
                  ? getUser
                  : () => promptAsync({ useProxy: false, showInRecents: true })
              }
            />
          </View>
          <View>
            <Button title={'logout'} onPress={() => logout()} />
          </View>
        </View>
        {/* <View style={styles.loginLink}>
          <Text style={styles.spanTitle}>Sudah memiliki akun? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Login')
            }}
          >
            <Text style={styles.spanTitle}>masuk</Text>
          </Pressable>
        </View> */}
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen
