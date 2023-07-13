import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from '../LoginScreen/LoginScreen'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import { AuthContext } from '../../hooks/AuthProvider'
import HeaderBack from '../../components/Header/HeaderBack'
import ModalAlert from '../../components/Modal/ModalAlert'

const LoginScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, message, isLoading, setIsLoading } = useContext(AuthContext)

  const handleLogin = () => {
    login(email, password)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground
        source={require('../../assets/E-Lara/login_background.png')}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/E-Lara/logo2.png')} />
          <Text style={styles.textMasuk}>Masuk</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View>
              <Input
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
                placeholder="Email"
                value={email}
              />
            </View>
            <View>
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
            <TouchableOpacity onPress={handleLogin} style={styles.buttonBlue}>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textButtonBlue}>Masuk</Text>
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
          </View>
        </View>
      </ImageBackground>
      {message ? <ModalAlert /> : ''}
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
