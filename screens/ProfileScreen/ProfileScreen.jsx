import React, { useEffect, useContext } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { AuthContext } from '../../hooks/AuthProvider'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import useProfileData from '../../hooks/useProfileData'
import HeaderComponent from '../../components/Header/HeaderComponent'
import { FontAwesome } from '@expo/vector-icons'

const ProfileScreen = () => {
  const { logout, user } = useContext(AuthContext)
  const {
    handleEdit,
    handleSave,
    image,
    isEditing,
    jurusan,
    namaLengkap,
    noHandphone,
    instansi,
    pickImage,
    semester,
    setJurusan,
    setNamaLengkap,
    setNoHandphone,
    setInstansi,
    setSemester,
  } = useProfileData()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
        }}
        scrollEnabled={true}
      >
        <View
          style={{
            flexDirection: 'column',
            marginTop: 20,
            marginHorizontal: 20,
            gap: 8,
          }}
        >
          <HeaderComponent title="Profile" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <View
            style={{
              backgroundColor: '#A460ED',
              width: 318,
              height: 203,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              marginBottom: 30,
              gap: 10,
            }}
          >
            {!isEditing ? (
              <TouchableOpacity>
                <View
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 70,
                    backgroundColor: '#EEEEEE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 5,
                    borderColor: 'white',
                  }}
                >
                  {!user.photoURL || image ? (
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 75,
                        borderWidth: 5,
                        borderColor: 'white',
                      }}
                    />
                  ) : (
                    <Image
                      source={{ uri: user.photoURL }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 75,
                        borderWidth: 5,
                        borderColor: 'white',
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={pickImage}>
                <View
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 70,
                    backgroundColor: '#EEEEEE',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome
                    name="camera"
                    size={25}
                    style={{
                      position: 'absolute',
                      right: 4,
                      bottom: 17,
                      zIndex: 2,
                    }}
                    color="black"
                  />
                  {!user.photoURL || image ? (
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 70,
                        borderWidth: 5,
                        borderColor: 'white',
                      }}
                    />
                  ) : (
                    <Image
                      source={{ uri: user.photoURL }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 75,
                        borderWidth: 5,
                        borderColor: 'white',
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}

            <Text style={styles.emailText}>{user.email}</Text>
          </View>

          <View
            style={{
              width: 318,
              marginBottom: 30,
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <Text style={styles.text}>Nama</Text>
            <TextInput
              style={!isEditing ? styles.input : styles.inputSetEdit}
              value={namaLengkap}
              onChangeText={setNamaLengkap}
              editable={isEditing}
            />

            <Text style={styles.text}>Perguruan Tinggi</Text>
            <TextInput
              style={!isEditing ? styles.input : styles.inputSetEdit}
              value={instansi}
              onChangeText={setInstansi}
              editable={isEditing}
              placeholder="Masukkan perguruan tinggi anda"
            />

            <Text style={styles.text}>Semester</Text>
            <TextInput
              style={!isEditing ? styles.input : styles.inputSetEdit}
              value={semester}
              onChangeText={setSemester}
              keyboardType="default"
              editable={isEditing}
              placeholder="Masukkan semester anda "
            />

            <Text style={styles.text}>Jurusan</Text>
            <TextInput
              style={!isEditing ? styles.input : styles.inputSetEdit}
              value={jurusan}
              onChangeText={setJurusan}
              editable={isEditing}
              placeholder="Masukkan jurusan anda"
            />

            <Text style={styles.text}>Nomor Telepon</Text>
            <TextInput
              style={!isEditing ? styles.input : styles.inputSetEdit}
              value={noHandphone}
              onChangeText={setNoHandphone}
              editable={isEditing}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              marginBottom: 100,
            }}
          >
            {!isEditing ? (
              <TouchableOpacity onPress={handleEdit} style={styles.buttonPink}>
                <Text style={styles.textButtonPink}>Ubah</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSave} style={styles.buttonPink}>
                <Text style={styles.textButtonPink}>Simpan</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={logout} style={styles.buttonWhite}>
              <Text style={styles.textButtonWhite}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },

  emailText: {
    fontSize: 15,
    color: '#EEEEEE',
    fontWeight: '500',
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 20,
    width: 320,
    height: 55,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#A460ED',
  },

  inputSetEdit: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 320,
    height: 55,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
  },

  buttonPink: {
    width: 320,
    height: 50,
    elevation: 3,
    backgroundColor: '#A661ED',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonPink: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  buttonWhite: {
    width: 320,
    height: 50,
    backgroundColor: '#E6E6E6',
    opacity: 0.5,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonWhite: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold',
  },
})

export default ProfileScreen
