import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from '../LoginScreen/LoginScreen'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import { AuthContext } from '../../hooks/AuthProvider'

const LoginScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login(email, password)
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
            <Pressable onPress={handleLogin} style={styles.buttonBlack}>
              <Text style={styles.textButtonBlack}>MASUK</Text>
            </Pressable>
          </View>
          <View style={styles.registerLink}>
            <Text>Belum memiliki akun?</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Register')
              }}
            >
              <Text style={styles.textLink}>daftar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
