import React, { useRef, useState } from 'react'
import { View, TextInput, Button, Text, ScrollView } from 'react-native'
import Swiper from 'react-native-deck-swiper'

const beasiswaData = [
  {
    id: 163,
    nama: 'Beasiswa A',
    ipk_min: 3.0,
    semester_min: 3,
    jurusan: 'Teknik Informatika',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [500000, 1000000],
  },
  {
    id: 165,
    nama: 'Beasiswa L',
    ipk_min: 3.0,
    semester_min: 3,
    jurusan: 'Teknik Komputer',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [500000, 1000000],
  },
  {
    id: 273,
    nama: 'Beasiswa B',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Teknik Komputer',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'D3',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 173,
    nama: 'Beasiswa z',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Teknik Komputer',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 133,
    nama: 'Beasiswa c',
    ipk_min: 3.0,
    semester_min: 4,
    jurusan: 'Teknik Elektro',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 3000000],
  },
  {
    id: 532,
    nama: 'Beasiswa D',
    ipk_min: 3.0,
    semester_min: 1,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'S1',
    range_uang_saku: [500000, 1200000],
  },
  {
    id: 534,
    nama: 'Beasiswa E',
    ipk_min: 3.0,
    semester_min: 3,
    jurusan: 'Teknik Elektro',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 560,
    nama: 'Beasiswa F',
    ipk_min: 3.0,
    semester_min: 4,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 730,
    nama: 'Beasiswa G',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Teknik Elektro',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 821,
    nama: 'Beasiswa H',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'D3',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 143,
    nama: 'Beasiswa I',
    ipk_min: 3.0,
    semester_min: 6,
    jurusan: 'Teknik Elektro',
    tipe_pendanaan: 'Partial Funded',
    jenjang: 'D3',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 521,
    nama: 'Beasiswa J',
    ipk_min: 3.0,
    semester_min: 1,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 381,
    nama: 'Beasiswa K',
    ipk_min: 3.0,
    semester_min: 3,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Swasta',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 124,
    nama: 'Beasiswa L',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Teknik Informatika',
    tipe_pendanaan: 'Swasta',
    jenjang: 'D3',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 732,
    nama: 'Beasiswa M',
    ipk_min: 3.0,
    semester_min: 2,
    jurusan: 'Ilmu Komunikasi',
    tipe_pendanaan: 'Swasta',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 832,
    nama: 'Beasiswa N',
    ipk_min: 3.0,
    semester_min: 3,
    jurusan: 'Ekonomi',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  {
    id: 972,
    nama: 'Beasiswa O',
    ipk_min: 3.0,
    semester_min: 1,
    jurusan: 'Ilmu Komunikasi',
    tipe_pendanaan: 'Fully Funded',
    jenjang: 'S1',
    range_uang_saku: [800000, 1200000],
  },
  // Tambahkan data beasiswa lainnya di sini
]

const PencarianBeasiswa = () => {
  const [ipk, setIpk] = useState('')
  const [semester, setSemester] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [tipePendanaan, setTipePendanaan] = useState('')
  const [jenjang, setJenjang] = useState('')
  const [rangeUangSaku, setRangeUangSaku] = useState('')
  const [hasilPencarian, setHasilPencarian] = useState([])
  const [displayResults, setDisplayResults] = useState(false)
  const swipeRef = useRef(null)

  const cariBeasiswa = () => {
    const hasil = beasiswaData.filter((beasiswa) => {
      return (
        beasiswa.ipk_min <= parseFloat(ipk) &&
        beasiswa.semester_min <= parseInt(semester) &&
        beasiswa.jurusan === jurusan &&
        beasiswa.tipe_pendanaan === tipePendanaan &&
        beasiswa.jenjang === jenjang &&
        beasiswa.range_uang_saku[0] <= parseFloat(rangeUangSaku) &&
        beasiswa.range_uang_saku[1] >= parseFloat(rangeUangSaku)
      )
    })

    const sortedHasil = hasil.sort((a, b) => {
      const kecocokanA = calculateMatchingScore(a)
      const kecocokanB = calculateMatchingScore(b)
      return kecocokanB - kecocokanA
    })

    const threshold = 0.1

    const beasiswaMirip = sortedHasil.filter((beasiswa) => {
      const kecocokan = calculateMatchingScore(beasiswa)
      return kecocokan > threshold
    })

    setHasilPencarian(beasiswaMirip)
    setDisplayResults(true)
  }

  const calculateMatchingScore = (beasiswa) => {
    let matchingScore = 0

    if (parseFloat(ipk) >= beasiswa.ipk_min) {
      matchingScore += 1
    }

    if (parseInt(semester) >= beasiswa.semester_min) {
      matchingScore += 1
    }

    if (jurusan !== '' && beasiswa.jurusan === jurusan) {
      matchingScore += 1
    }

    if (tipePendanaan !== '' && beasiswa.tipe_pendanaan === tipePendanaan) {
      matchingScore += 1
    }

    if (jenjang !== '' && beasiswa.jenjang === jenjang) {
      matchingScore += 1
    }

    if (rangeUangSaku !== '') {
      const uangSaku = parseFloat(rangeUangSaku)
      if (
        uangSaku >= beasiswa.range_uang_saku[0] &&
        uangSaku <= beasiswa.range_uang_saku[1]
      ) {
        matchingScore += 1
      }
    }

    const totalKriteria = 6 // Jumlah kriteria pencarian

    const matchingPercentage = matchingScore / totalKriteria

    // Tambahkan faktor-faktor kecocokan lainnya sesuai kebutuhan

    return matchingPercentage
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {displayResults ? (
        <Swiper
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          ref={swipeRef}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                // textAlign: 'flex-end',
                color: '#FF0000',
              },
            },
            right: {
              title: 'Match',
              style: {
                label: {
                  color: '#4DED30',
                },
              },
            },
          }}
          containerStyle={{
            backgroundColor: 'transparent',
          }}
          cards={hasilPencarian}
          renderCard={(card) =>
            card ? (
              <View
                key={card.id}
                style={{
                  backgroundColor: 'white',
                  height: 500,
                  borderRadius: 15,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <Image
                source={{ uri: card.gambar }}
                style={{
                  position: 'absolute',
                  top: 0,
                  height: 350,
                  width: 300,
                  borderRadius: 15,
                  marginTop: 60,
                }}
                resizeMode="contain"
              /> */}

                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: '',
                    height: 50,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderBottomStartRadius: 15,
                    borderBottomEndRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                      }}
                    >
                      {card.nama}
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: 'white',
                  height: 500,
                  borderRadius: 15,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Tidak Ada beasiswa</Text>
              </View>
            )
          }
        />
      ) : (
        <View>
          <TextInput
            placeholder="IPK"
            value={ipk}
            onChangeText={setIpk}
            keyboardType="numeric"
            style={{ marginBottom: 10 }}
          />
          <TextInput
            placeholder="Semester"
            value={semester}
            onChangeText={setSemester}
            keyboardType="numeric"
            style={{ marginBottom: 10 }}
          />
          <TextInput
            placeholder="Jurusan"
            value={jurusan}
            onChangeText={setJurusan}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            placeholder="Tipe Pendanaan"
            value={tipePendanaan}
            onChangeText={setTipePendanaan}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            placeholder="Jenjang"
            value={jenjang}
            onChangeText={setJenjang}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            placeholder="Range Uang Saku"
            value={rangeUangSaku}
            onChangeText={setRangeUangSaku}
            keyboardType="numeric"
            style={{ marginBottom: 10 }}
          />
          <Button title="Cari Beasiswa" onPress={cariBeasiswa} />
        </View>
      )}
    </View>
  )
}

export default PencarianBeasiswa

// import {
//   View,
//   Text,
//   SafeAreaView,
//   Dimensions,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Button,
// } from 'react-native'
// import React from 'react'
// import { useState } from 'react'
// import HeaderComponent from '../../components/Header/HeaderComponent'

// const ProfileScreen = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false)
//   const [updatedName, setUpdatedName] = useState('')
//   const [updatedBirthPlace, setUpdatedBirthPlace] = useState('')
//   const [updatedBirthDate, setUpdatedBirthDate] = useState('')
//   const [updatedPhone, setUpdatedPhone] = useState('')

//   const userInfo = {
//     namaLengkap: 'Neymar',
//     email: 'baloeress@gmail.com',
//     tempatLahir: 'Jakarta',
//     tanggalLahir: '1 Januari 1990',
//     noHandphone: '081234567890',
//   }

//   const handleUpdateProfile = () => {
//     // Tambahkan logika untuk menghandle pembaruan profil di sini
//     setIsModalVisible(true)
//   }

//   const handleSaveChanges = () => {
//     // Tambahkan logika untuk menyimpan perubahan profil
//     console.log('Name:', updatedName)
//     console.log('Birth Place:', updatedBirthPlace)
//     console.log('Birth Date:', updatedBirthDate)
//     console.log('Phone:', updatedPhone)

//     // Setelah menyimpan perubahan, tutup modal
//     setIsModalVisible(false)
//   }

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         {/* <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//           }}
//         >
//           <HeaderComponent />
//         </View> */}
//         <View
//           style={{
//             justifyContent: 'center',
//             width: 355,
//             height: 600,
//             backgroundColor: 'white',
//             marginTop: 60,
//             marginHorizontal: 20,
//             borderRadius: 15,
//           }}
//         >
//           <View style={styles.header}>
//             <TouchableOpacity>
//               <Image
//                 source={{
//                   uri:
//                     'https://images.squarespace-cdn.com/content/v1/5e1c5d714316850ed6da863a/1615287646326-6O3BQGGU4IWUQX07C3RD/Neymar.jpg?format=1500w',
//                 }}
//                 style={styles.profilePicture}
//               />
//             </TouchableOpacity>
//             <Text style={styles.username}>{userInfo.namaLengkap}</Text>
//             <Text style={styles.bio}>{userInfo.email}</Text>
//           </View>
//           <View style={styles.content}>
//             <Text style={styles.sectionTitle}>Informasi</Text>
//             <View style={styles.infoContainer}>
//               <Text style={styles.infoLabel}>Nama Lengkap:</Text>
//               <Text style={styles.infoValue}>{userInfo.namaLengkap}</Text>
//             </View>
//             <View style={styles.infoContainer}>
//               <Text style={styles.infoLabel}>Tempat Lahir:</Text>
//               <Text style={styles.infoValue}>{userInfo.tempatLahir}</Text>
//             </View>
//             <View style={styles.infoContainer}>
//               <Text style={styles.infoLabel}>Tanggal Lahir:</Text>
//               <Text style={styles.infoValue}>{userInfo.tanggalLahir}</Text>
//             </View>
//             <View style={styles.infoContainer}>
//               <Text style={styles.infoLabel}>No. Handphone:</Text>
//               <Text style={styles.infoValue}>{userInfo.noHandphone}</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.updateButton}
//               onPress={handleUpdateProfile}
//             >
//               <Text style={styles.updateButtonText}>Update Profile</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <Modal
//           visible={isModalVisible}
//           animationType="slide"
//           transparent={true}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Update Profile</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Nama Lengkap"
//                 value={updatedName}
//                 onChangeText={(text) => setUpdatedName(text)}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Tempat Lahir"
//                 value={updatedBirthPlace}
//                 onChangeText={(text) => setUpdatedBirthPlace(text)}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Tanggal Lahir"
//                 value={updatedBirthDate}
//                 onChangeText={(text) => setUpdatedBirthDate(text)}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="No. Handphone"
//                 value={updatedPhone}
//                 onChangeText={(text) => setUpdatedPhone(text)}
//               />
//               <TouchableOpacity
//                 style={styles.modalSaveButton}
//                 onPress={handleSaveChanges}
//               >
//                 <Text style={styles.modalSaveButtonText}>Simpan Perubahan</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalSaveButton}
//                 onPress={() => setIsModalVisible(false)}
//               >
//                 <Text style={styles.modalSaveButtonText}>Batal</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   )
// }

// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// const styles = StyleSheet.create({
//   container: {
//     width: width,
//     height: height,
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   profilePicture: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 10,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   bio: {
//     fontSize: 16,
//     color: '#888',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   infoContainer: {
//     marginBottom: 10,
//   },
//   infoLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   infoValue: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   updateButton: {
//     backgroundColor: 'orange',
//     padding: 10,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   updateButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     width: '80%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },

//   modalSaveButton: {
//     backgroundColor: 'orange',
//     padding: 10,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   modalSaveButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// })

// export default ProfileScreen
