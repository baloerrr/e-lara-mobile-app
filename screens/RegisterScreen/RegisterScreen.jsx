import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { styles } from './RegisterScreen'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const register = () => {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        if (user) {
          Alert.alert('Success', 'Daftar Berhasil')
          navigation.navigate('Home')
        }
      })
      .catch((error) => {
        console.log('error', error.message)
      })
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logoText}>E-LARA</Text>
          </View>
          <View>
            <Text>Logo</Text>
          </View>
        </View>
        <View style={styles.registerContainer}>
          <View>
            <Text style={styles.registerText}>Daftar Akun</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formControl}>
              <Text>Email</Text>
              <Input
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
                placeholder="Email"
                value={email}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Password</Text>
              <Input
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
              />
            </View>
            {/* <View style={styles.formControl}>
              <Text>Nama Lengkap</Text>
              <TextInput style={styles.input} placeholder="Nama Lengkap" />
            </View>
            <View style={styles.formControl}>
              <Text>Tempat Lahir</Text>
              <TextInput style={styles.input} placeholder="Tempat Lahir" />
            </View>
            <View style={styles.formControl}>
              <Text>Tanggal Lahir</Text>
              <TextInput style={styles.input} placeholder="Tanggal Lahir" />
            </View>
            <View style={styles.formControl}>
              <Text>Handphone</Text>
              <TextInput style={styles.input} placeholder="Handphone" />
            </View> */}
            <View>
              <TouchableOpacity onPress={register} style={styles.buttonBlack}>
                <Text style={styles.textButtonBlack}>DAFTAR</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack()
                }}
                style={styles.buttonBlack}
              >
                <Text style={styles.textButtonBlack}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen
