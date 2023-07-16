import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
  ImageBackground,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './RegisterScreen'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import InputPhone from '../../components/FormInput/InputPhone'
import ModalAlert from '../../components/Modal/ModalAlert'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from '../../hooks/AuthProvider'
import DatePicker from 'react-native-modern-datepicker'
import { getFormatedDate } from 'react-native-modern-datepicker'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState(new Date())
  const [noHandphone, setNoHandphone] = useState('')
  // const [imageUri, setImageUri] = useState(null)

  const [message, setMessage] = useState('')

  const navigation = useNavigation()

  const { register, isLoading } = useContext(AuthContext)

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false)
  const today = new Date()
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  )
  const [selectedStartDate, setSelectedStartDate] = useState('')
  const [startedDate, setStartedDate] = useState('12/12/2023')

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate)
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker)
  }

  const handleRegister = async () => {
    const registerData = {
      email,
      password,
      namaLengkap,
      tempatLahir,
      tanggalLahir,
      noHandphone,
    }

    try {
      await register(registerData)
      setEmail('')
      setPassword('')
      setNamaLengkap('')
      setTempatLahir('')
      setTanggalLahir('')
      setNoHandphone('')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={require('../../assets/E-Lara/register_background.png')}
        style={styles.container}
      >
        <View style={styles.registerContainer}>
          <View style={styles.titleContainer}>
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
              <View>
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={handleOnPressStartDate}
                >
                  <Text
                    style={
                      selectedStartDate ? { color: 'black' } : { color: 'grey' }
                    }
                  >
                    {selectedStartDate ? selectedStartDate : 'Tanggal lahir'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formControl}>
              {/* <Text>No Handphone</Text> */}
              <InputPhone
                onChangeText={(noHandphone) => setNoHandphone(noHandphone)}
                defaultValue={noHandphone}
                containerStyle={{ borderRadius: 10, paddingHorizontal: 10 }}
              />
            </View>
            <View></View>
            <View>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.buttonBlue}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={styles.textButtonBlue}>Daftar</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.loginLink}>
              <Text style={styles.loginText}>Sudah memiliki akun?</Text>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={openStartDatePicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                minimumDate={startDate}
                selected={startedDate}
                onDateChanged={handleChangeStartDate}
                onSelectedChange={(date) => setSelectedStartDate(date)}
                options={{
                  backgroundColor: '#080516',
                  textHeaderColor: '#469ab6',
                  textDefaultColor: '#FFFFFF',
                  selectedTextColor: '#FFF',
                  mainColor: '#469ab6',
                  textSecondaryColor: '#FFFFFF',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
              />

              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text style={{ color: 'white' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen
