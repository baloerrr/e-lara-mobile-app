import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../LandingScreen/LandingScreen'
import * as WebBrowser from 'expo-web-browser'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useCustomFonts from '../../hooks/useCustomFonts'

WebBrowser.maybeCompleteAuthSession()

const LandingScreen = () => {
  const navigation = useNavigation()
  const fontsLoaded = useCustomFonts()

  const loginNavigate = () => {
    navigation.navigate('Login')
  }

  const registerNavigate = () => {
    navigation.navigate('Register')
  }

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear()
      console.log('terhapus')
    } catch (error) {
      console.warn('Error clearing AsyncStorage:', error)
    }
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi, Beswan</Text>
        <Text style={styles.subtitle}>
          Sudah siap menemukan {'\n'} beasiswa impian?
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/E-Lara/vector_landing.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={registerNavigate} style={styles.buttonPink}>
          <View style={styles.elaraContainer}>
            <Text style={styles.textButtonPink}>Daftar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={loginNavigate}
          style={styles.buttonTransparent}
        >
          <View style={styles.elaraContainer}>
            <Text style={styles.textButtonTransparent}>Masuk</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={clearAsyncStorage}
          style={styles.buttonTransparent}
        >
          <View style={styles.elaraContainer}>
            <Text style={styles.textButtonTransparent}>Onboarding</Text>
          </View>
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.socialButtonContainer}>
        <TouchableOpacity>
          <View style={styles.socialButton}>
            <Image
              source={require('../../assets/E-Lara/facebook.jpg')}
              resizeMode="cover"
              style={styles.socialImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            token
              ? getUser
              : () => promptAsync({ useProxy: false, showInRecents: true })
          }
          style={styles.buttonGray}
        >
          <View style={styles.socialButton}>
            <Image
              source={require('../../assets/E-Lara/google.jpg')}
              resizeMode="cover"
              style={styles.socialImage}
            />
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  )
}

export default LandingScreen
