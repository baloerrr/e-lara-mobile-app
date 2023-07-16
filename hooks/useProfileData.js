import { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { firebase } from '../firebase.js'
import * as ImagePicker from 'expo-image-picker'
import { AuthContext } from './AuthProvider.js'

const useProfileData = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [image, setImage] = useState(null)
  const [namaLengkap, setNamaLengkap] = useState('')
  const [noHandphone, setNoHandphone] = useState('')
  const [perguruanTinggi, setPerguruanTinggi] = useState('')
  const [semester, setSemester] = useState('')
  const [jurusan, setJurusan] = useState('')
  const { user } = useContext(AuthContext)


  useEffect(() => {
    ;(async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Please allow access to your photo library.',
        )
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  uploadImageToFirebase = async (uri) => {
    try {
      const currentUser = firebase.auth().currentUser
      const response = await fetch(uri)
      const blob = await response.blob()

      const filename = Math.random().toString(36).substring(7)

      const ref = firebase.storage().ref().child(`images/${filename}`)
      await ref.put(blob)

      const url = await ref.getDownloadURL()

      await currentUser.updateProfile({
        photoURL: url,
      })

      return url
    } catch (error) {
      throw error
    }
  }

  const getUserData = async () => {
    try {
      if (user) {
        const userDoc = await firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .get()

        if (userDoc.exists) {
          return userDoc.data()
        }
      }
      return null
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData()
        setNamaLengkap(userData.namaLengkap || '')
        setNoHandphone(userData.noHandphone || '')
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])
  const updateUserData = async (userData) => {
    try {
      if (user) {
        const userRef = firebase.firestore().collection('users').doc(user.uid)

        await userRef.update(userData)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      if (image) {
        await uploadImageToFirebase(image)
      }

      const userData = {
        namaLengkap: namaLengkap,
        perguruanTinggi: perguruanTinggi,
        semester: semester,
        jurusan: jurusan,
        noHandphone: noHandphone,
      }

      await updateUserData(userData)
      setIsEditing(false)
      Alert.alert('Success', 'Update data is succesfull')
    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    isEditing,
    image,
    pickImage,
    namaLengkap,
    setNamaLengkap,
    perguruanTinggi,
    setPerguruanTinggi,
    jurusan,
    setJurusan,
    semester,
    setSemester,
    noHandphone,
    setNoHandphone,
    handleEdit,
    handleSave,
  }
}

export default useProfileData
