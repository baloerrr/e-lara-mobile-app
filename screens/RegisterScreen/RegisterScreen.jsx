import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
  SafeAreaView,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './RegisterScreen'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/FormInput/Input'
import InputPhone from '../../components/FormInput/InputPhone'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from '../../hooks/AuthProvider'
import DatePicker from 'react-native-modern-datepicker'
import { getFormatedDate } from 'react-native-modern-datepicker'
import useCustomFonts from '../../hooks/useCustomFonts'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import ModalAlert from '../../components/Modal/ModalAlert.jsx'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState(new Date())
  const [noHandphone, setNoHandphone] = useState('')
  const navigation = useNavigation()
  const {
    register,
    isLoading,
    getUser,
    token,
    promptAsync,
    user,
    isError,
    isWarning,
    isSuccess,
    title,
    message,
    modalVisible,
    setModalVisible,
    setIsLoading,
  } = useContext(AuthContext)
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false)
  const today = new Date()
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  )
  const [selectedStartDate, setSelectedStartDate] = useState('')
  const [startedDate, setStartedDate] = useState('12/12/2023')
  const fontsLoaded = useCustomFonts()

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

      // setEmail('')
      // setPassword('')
      // setNamaLengkap('')
      // setTempatLahir('')
      // setTanggalLahir('')
      // setNoHandphone('')
    } catch (error) {
      console.log(error.message)
    }
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
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.registerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Daftar Akun</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <FontAwesome
                name="envelope"
                size={21}
                color="#F07DEA"
                style={styles.icon}
              />
              <Input
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
                placeholder="Email"
                value={email}
              />
            </View>
            <View style={styles.formGroup}>
              <FontAwesome
                name="lock"
                size={25}
                color="#F07DEA"
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
            <View style={styles.formGroup}>
              <FontAwesome
                name="user"
                size={25}
                color="#F07DEA"
                style={styles.icon}
              />
              <Input
                onChangeText={(namaLengkap) => setNamaLengkap(namaLengkap)}
                style={styles.input}
                placeholder="Nama Lengkap"
                value={namaLengkap}
              />
            </View>
            <View style={styles.formGroup}>
              <MaterialIcons
                name="place"
                size={25}
                color="#F07DEA"
                style={styles.icon}
              />
              <Input
                onChangeText={(tempatLahir) => setTempatLahir(tempatLahir)}
                style={styles.input}
                placeholder="Tempat Lahir"
                value={tempatLahir}
              />
            </View>
            <View style={styles.formGroup}>
              <MaterialIcons
                name="date-range"
                size={25}
                color="#F07DEA"
                style={styles.icon}
              />
              <View>
                <TouchableOpacity
                  style={styles.inputDate}
                  onPress={handleOnPressStartDate}
                >
                  <Text
                    style={
                      selectedStartDate
                        ? styles.selectedStartDate
                        : styles.notSelectedStartDate
                    }
                  >
                    {selectedStartDate ? selectedStartDate : 'Tanggal lahir'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formGroup}>
              <InputPhone
                onChangeText={(noHandphone) => setNoHandphone(noHandphone)}
                defaultValue={noHandphone}
                containerStyle={styles.inputPhone}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.buttonPink}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={styles.textButtonPink}>Daftar</Text>
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
            <Text
              style={{
                marginTop: -10,
                fontFamily: 'Modernist-Regular',
                fontSize: 15,
                color: 'white',
              }}
            >
              Atau dengan
            </Text>
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
                    : () =>
                        promptAsync({ useProxy: false, showInRecents: true })
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
          {modalVisible ? (
            <ModalAlert
              visible={modalVisible}
              onRequestClose={handleClose}
              title={title}
              message={message}
              type={messageType}
            />
          ) : (
            ''
          )}
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen
