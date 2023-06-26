import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from '../LoginScreen/LoginScreen'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import { AuthContext } from '../../hooks/AuthProvider'
import Header from '../../components/Header/Header'
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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
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
        <View style={styles.formContainer}>
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
          <View>
            <TouchableOpacity onPress={handleLogin} style={styles.buttonBlack}>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textButtonBlack}>MASUK</Text>
              )}
            </TouchableOpacity>
          </View>
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
        {message ? <ModalAlert /> : ''}
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
