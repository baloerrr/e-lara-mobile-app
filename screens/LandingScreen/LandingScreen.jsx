import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../LandingScreen/LandingScreen'
import { AuthContext } from '../../hooks/AuthProvider'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

const LandingScreen = () => {
  const navigation = useNavigation()
  const { getUser, token, promptAsync } = useContext(AuthContext)

  const loginNavigate = () => {
    navigation.navigate('Login')
  }

  const registerNavigate = () => {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/E-Lara/landing_background.png')}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={require('../../assets/E-Lara/logo.png')}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Jalan <Text style={styles.textBlue}>menuju</Text> mimpimu {'\n'}{' '}
            Temukan <Text style={styles.textBlue}>Beasiswa</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={registerNavigate}
            style={styles.buttonBlue}
          >
            <View style={styles.elaraContainer}>
              <Text style={styles.textButtonBlue}>Daftar</Text>
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
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.lineHorizontal} />
          <View>
            <Text style={styles.separatorText}>ATAU</Text>
          </View>
          <View style={styles.lineHorizontal} />
        </View>

        <View style={styles.socialButtonContainer}>
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LandingScreen
