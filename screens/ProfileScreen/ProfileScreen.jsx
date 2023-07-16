import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { AuthContext } from '../../hooks/AuthProvider'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import useProfileData from '../../hooks/useProfileData'

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
    perguruanTinggi,
    pickImage,
    semester,
    setJurusan,
    setNamaLengkap,
    setNoHandphone,
    setPerguruanTinggi,
    setSemester,
  } = useProfileData()

  useEffect(() => {
    console.log(namaLengkap)
  }, [namaLengkap])

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
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
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
              style={styles.input}
              value={namaLengkap}
              onChangeText={setNamaLengkap}
              editable={isEditing}
            />

            <Text style={styles.text}>Perguruan Tinggi</Text>
            <TextInput
              style={styles.input}
              value={perguruanTinggi}
              onChangeText={setPerguruanTinggi}
              editable={isEditing}
              placeholder="Masukkan perguruan tinggi anda"
            />

            <Text style={styles.text}>Semester</Text>
            <TextInput
              style={styles.input}
              value={semester}
              onChangeText={setSemester}
              editable={isEditing}
              placeholder="Masukkan semester anda "
            />

            <Text style={styles.text}>Jurusan</Text>
            <TextInput
              style={styles.input}
              value={jurusan}
              onChangeText={setJurusan}
              editable={isEditing}
              placeholder="Masukkan jurusan anda"
            />

            <Text style={styles.text}>Nomor Telepon</Text>
            <TextInput
              style={styles.input}
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
              marginBottom: 80,
            }}
          >
            {!isEditing ? (
              <TouchableOpacity onPress={handleEdit} style={styles.buttonPink}>
                <Text style={styles.textButtonPink}>Edit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSave} style={styles.buttonPink}>
                <Text style={styles.textButtonPink}>Save</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={logout} style={styles.buttonWhite}>
              <Text style={styles.textButtonWhite}>Keluar</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonWhite}>
              <Text style={styles.textButtonWhite}>Upload</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#A460ED',
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

  buttonPink: {
    width: 320,
    height: 55,
    elevation: 3,
    backgroundColor: '#F07DEA',
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
    height: 55,
    // elevation: 3,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonWhite: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#A460ED',
  },
})

export default ProfileScreen
