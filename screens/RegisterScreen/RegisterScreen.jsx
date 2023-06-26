import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import React, { useState } from 'react'
import { styles } from './RegisterScreen'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../../firebase'
import Input from '../../components/FormInput/Input'
import InputPhone from '../../components/FormInput/InputPhone'
import ModalAlert from '../../components/Modal/ModalAlert'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [noHandphone, setNoHandphone] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [message, setMessage] = useState('')

  const navigation = useNavigation()

  const register = () => {
    setIsLoading(true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const timestamps = firebase.firestore.FieldValue.serverTimestamp()

        firebase.firestore().collection('users').doc(user.uid).set({
          namaLengkap: namaLengkap,
          tempatLahir: tempatLahir,
          tanggalLahir: tanggalLahir,
          noHandphone: noHandphone,
          createdAt: timestamps,
        })
      })
      .then(() => {
        setIsLoading(false)
        Alert.alert('Success', 'Daftar Berhasil')
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.message)
      })
  }
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.logoText}>E-LARA</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/E-Lara/logo.png')}
              resizeMode="cover"
              style={styles.elaraLogo}
            />
          </View>
        </View>
        <View style={styles.registerContainer}>
          <View>
            <Text style={styles.registerText}>Daftar Akun</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formControl}>
              {/* <Text>Email</Text> */}
              <Input
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
                placeholder="Email"
                value={email}
              />
            </View>
            <View style={styles.formControl}>
              {/* <Text>Password</Text> */}
              <Input
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formControl}>
              {/* <Text>Nama Lengkap</Text> */}
              <Input
                onChangeText={(namaLengkap) => setNamaLengkap(namaLengkap)}
                style={styles.input}
                placeholder="Nama Lengkap"
                value={namaLengkap}
              />
            </View>
            <View style={styles.formControl}>
              {/* <Text>Tempat Lahir</Text> */}
              <Input
                onChangeText={(tempatLahir) => setTempatLahir(tempatLahir)}
                style={styles.input}
                placeholder="Tempat Lahir"
                value={tempatLahir}
              />
            </View>
            <View style={styles.formControl}>
              {/* <Text>Tanggal Lahir</Text> */}
              <Input
                onChangeText={(tanggalLahir) => setTanggalLahir(tanggalLahir)}
                style={styles.input}
                placeholder="Tanggal Lahir"
                value={tanggalLahir}
              />
            </View>
            <View style={styles.formControl}>
              {/* <Text>No Handphone</Text> */}
              <InputPhone
                onChangeText={(noHandphone) => setNoHandphone(noHandphone)}
                defaultValue={noHandphone}
              />
            </View>
            <View>
              <TouchableOpacity onPress={register} style={styles.buttonBlack}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={styles.textButtonBlack}>DAFTAR</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.loginLink}>
              <Text style={styles.loginText}>Belum memiliki akun?</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate('Login')
                }}
              >
                <Text style={styles.textLinkLogin}>masuk</Text>
              </Pressable>
            </View>
          </View>
          {message ? <ModalAlert /> : ''}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen
