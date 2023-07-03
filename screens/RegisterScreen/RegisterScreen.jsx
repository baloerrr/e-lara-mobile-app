import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Image,
  Button,
  ScrollView,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './RegisterScreen'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../../firebase'
import Input from '../../components/FormInput/Input'
import InputPhone from '../../components/FormInput/InputPhone'
import ModalAlert from '../../components/Modal/ModalAlert'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from '../../hooks/AuthProvider'
import useUploadImage from '../../hooks/useUploadImage'
import { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [noHandphone, setNoHandphone] = useState('')
  const [imageUri, setImageUri] = useState(null)

  const [message, setMessage] = useState('')

  const navigation = useNavigation()

  const { register, isLoading } = useContext(AuthContext)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      console.log('Permission Denied')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    const source = result.assets[0].uri

    setImageUri(source)
  }

  const handleRegister = async () => {
    const registerData = {
      email,
      password,
      namaLengkap,
      tempatLahir,
      tanggalLahir,
      noHandphone,
      imageUri,
    }

    try {
      await register(registerData)
      setEmail('')
      setPassword('')
      setNamaLengkap('')
      setTempatLahir('')
      setTanggalLahir('')
      setNoHandphone('')
      setImageUri(null)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    console.log(imageUri)
  }, [imageUri])

  return (
    <ScrollView>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
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
              {/* <View style={styles.imagepreviewcontainer}>{imagePreview}</View> */}
              <Button title="Take Image" onPress={pickImage} />
            </View>
            <View>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.buttonBlack}
              >
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
      </KeyboardAwareScrollView>
    </ScrollView>
  )
}

export default RegisterScreen
