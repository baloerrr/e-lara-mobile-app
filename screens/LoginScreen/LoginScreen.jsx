import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
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
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

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

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.subtitle}>masuk dan mulai lah!</Text>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="envelope"
                color="#4F4559"
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
            <View style={styles.inputContainer}>
              <FontAwesome
                name="lock"
                color="#4F4559"
                size={25}
                style={styles.icon}
              />
              <Input
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={togglePassword}
                style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: 15,
                }}
              >
                <FontAwesome
                  name={showPassword ? 'eye' : 'eye-slash'}
                  color={showPassword ? '#4F4559' : 'grey'}
                  size={21}
                />
              </TouchableOpacity>
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

            {/* <Text style={styles.orText}>Atau dengan</Text> */}
          </View>

          {/* <View style={styles.googleButtonContainer}>
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
          </View> */}
        </View>
      </View>

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
