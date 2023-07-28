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
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import ModalAlert from '../../components/Modal/ModalAlert.jsx'
import { ScrollView } from 'react-native'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namaLengkap, setNamaLengkap] = useState('')
  const [instansi, setInstansi] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [semester, setSemester] = useState('')
  const [noHandphone, setNoHandphone] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()
  const {
    register,
    isLoading,
    getUser,
    token,
    promptAsync,
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
    today.setDate(today.getDate()),
    'YYYY/MM/DD',
  )
  const [selectedStartDate, setSelectedStartDate] = useState('')
  const [startedDate, setStartedDate] = useState('2004/04/04')
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
      jurusan,
      semester,
      instansi,
      noHandphone,
    }

    try {
      await register(registerData)

      setEmail('')
      setPassword('')
      setNamaLengkap('')
      setInstansi('')
      setJurusan('')
      setSemester('')
      setNoHandphone('')

      navigation.navigate('Login')
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

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.registerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Daftar Akun</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <FontAwesome
                    name="envelope"
                    size={21}
                    color="#4F4559"
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
                    size={25}
                    color="#4F4559"
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
              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <FontAwesome
                    name="user"
                    size={25}
                    color="#4F4559"
                    style={styles.icon}
                  />
                  <Input
                    onChangeText={(namaLengkap) => setNamaLengkap(namaLengkap)}
                    style={styles.input}
                    placeholder="Nama Lengkap"
                    value={namaLengkap}
                  />
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <FontAwesome
                    name="university"
                    size={20}
                    color="#4F4559"
                    style={styles.icon}
                  />
                  <Input
                    onChangeText={(instansi) => setInstansi(instansi)}
                    style={styles.input}
                    placeholder="Perguruan Tinggi"
                    value={instansi}
                  />
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <FontAwesome
                    name="graduation-cap"
                    size={20}
                    color="#4F4559"
                    style={styles.icon}
                  />
                  <Input
                    onChangeText={(jurusan) => setJurusan(jurusan)}
                    style={styles.input}
                    placeholder="Jurusan"
                    value={jurusan}
                  />
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons
                    name="calendar-sync-outline"
                    size={25}
                    color="#4F4559"
                    style={styles.icon}
                  />
                  <Input
                    onChangeText={(semester) => setSemester(semester)}
                    style={styles.input}
                    placeholder="Semester"
                    keyboardType="number-pad"
                    value={semester}
                  />
                </View>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>
                  <InputPhone
                    onChangeText={(noHandphone) => setNoHandphone(noHandphone)}
                    defaultValue={noHandphone}
                    containerStyle={styles.inputPhone}
                  />
                </View>
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
              {/* <Text
                style={{
                  marginTop: -10,
                  fontFamily: 'Modernist-Regular',
                  fontSize: 15,
                  color: 'white',
                }}
              >
                Atau dengan
              </Text> */}
              {/* <View style={styles.googleButtonContainer}>
                <FontAwesome
                  name="google"
                  color="#A460ED"
                  size={30}
                  style={styles.icon}
                />
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
              {/* </View>  */}
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
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={openStartDatePicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                selected={startedDate}
                onDateChanged={handleChangeStartDate}
                selectorStartingYear={1900}
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
