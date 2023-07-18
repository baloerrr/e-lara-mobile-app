import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import { AuthContext } from '../../hooks/AuthProvider'
import useCustomFonts from '../../hooks/useCustomFonts'
import { FontAwesome } from '@expo/vector-icons'
import ModalAlert from '../../components/Modal/ModalAlert'
import { styles } from './LoginScreen.js'

const LoginScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    login,
    message,
    isLoading,
    modalVisible,
    title,
    setIsLoading,
    setModalVisible,
    setIsSuccess,
    getUser,
    token,
    promptAsync,
    isError,
    isWarning,
    isSuccess,
  } = useContext(AuthContext)

  const fontsLoaded = useCustomFonts()

  const handleLogin = () => {
    setIsSuccess(false)
    login(email, password)
  }

  const handleClose = () => {
    setModalVisible(false)
    setIsLoading(false)
  }

  let messageType = ''
  if (isError) {
    messageType = 'error'
  } else if (isWarning) {
    messageType = 'warning'
  } else if (isSuccess) {
    messageType = 'success'
  } else {
    messageType = ''
  }

  console.log(messageType)

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/E-Lara/login_background.png')}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>masuk dan mulai lah!</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title2}>Masuk</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="envelope"
                color="#F07DEA"
                size={20}
                style={styles.icon}
              />
              <Input
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
                placeholder="Email"
                value={email}
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="lock"
                color="#F07DEA"
                size={25}
                style={styles.icon}
              />
              <Input
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.buttonPink}>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textButtonPink}>Masuk</Text>
              )}
            </TouchableOpacity>
            <View style={styles.registerLink}>
              <Text style={styles.registerText}>Belum memiliki akun?</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('Register')
                }}
              >
                <Text style={styles.textLinkRegister}>daftar</Text>
              </Pressable>
            </View>

            <Text style={styles.orText}>Atau dengan</Text>
          </View>

          <View style={styles.googleButtonContainer}>
            <FontAwesome
              name="google"
              color="#A460ED"
              size={30}
              style={styles.icon}
            />
            <TouchableOpacity
              onPress={
                token
                  ? getUser
                  : () => promptAsync({ useProxy: false, showInRecents: true })
              }
              style={styles.buttonWhite}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textButtonWhite}>
                  Lanjutkan Dengan Google
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {modalVisible ? (
        <ModalAlert
          visible={modalVisible}
          onRequestClose={handleClose}
          title={title}
          message={message}
          type={messageType}
        />
      ) : null}
    </SafeAreaView>
  )
}

export default LoginScreen
