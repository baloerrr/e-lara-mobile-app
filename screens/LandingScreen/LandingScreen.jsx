import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Image,
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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/E-Lara/landingImage.png')}
            resizeMode="cover"
            style={{
              width: 400,
              height: 310,
            }}
          />
        </View>
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
            <View style={styles.elaraContainer}>
              <Text style={styles.textButtonBlack}>LANJUTKAN</Text>
              <Image
                source={require('../../assets/E-Lara/top-right-angled.png')}
                style={styles.buttonBlackImage}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonBlue}>
            <View style={styles.facebookContainer}>
              <Image
                source={require('../../assets/E-Lara/facebook.png')}
                resizeMode="cover"
                style={styles.facebookImage}
              />
              <Text style={styles.textButtonBlue}>
                LANJUTKAN DENGAN FACEBOOK
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={
              token
                ? getUser
                : () => promptAsync({ useProxy: false, showInRecents: true })
            }
            style={styles.buttonGray}
          >
            <View style={styles.googleContainer}>
              <Image
                source={require('../../assets/E-Lara/google.png')}
                resizeMode="cover"
                style={styles.googleImage}
              />
              <Text style={styles.textButtonGray}>LANJUTKAN DENGAN GOOGLE</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen
