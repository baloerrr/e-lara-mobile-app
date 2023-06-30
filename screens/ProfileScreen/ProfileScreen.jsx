import React, { useRef, useState, useEffect } from 'react'
import { View, TextInput, Button, Text, ScrollView } from 'react-native'
import Swiper from 'react-native-deck-swiper'

const userVector = {
  ipk: 3.6,
  semester: 3,
  jurusan: 'Teknik Mesin',
  tipePendanaan: 0,
  jenjang: 'S1',
  rangeUangSaku: [500000, 1500000],
}

const beasiswaData = [
  {
    id: 1,
    nama: 'BANK BI',
    ipk: 3.0,
    semester: 3,
    jurusan: ['Teknik Komputer', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S2', 'D3'],
    rangeUangSaku: [500000, 1500000],
  },
  {
    id: 2,
    nama: 'DIcoding',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 3,
    nama: 'Salemba Empat',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 4,
    nama: 'Koridor',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 5,
    nama: 'LPDP',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 6,
    nama: 'Beasiswa A',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 7,
    nama: 'Beasiswa B',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 8,
    nama: 'Beasiswa C',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 9,
    nama: 'Beasiswa D',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 10,
    nama: 'Beasiswa E',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Teknik Mesin', 'Teknik Elektro'],
    tipePendanaan: 0,
    jenjang: ['S1, D3, D4'],
    rangeUangSaku: [100000, 2000000],
  },
  {
    id: 11,
    nama: 'Beasiswa F',
    ipk: 3.5,
    semester: 4,
    jurusan: ['Manajemen'],
    tipePendanaan: 0,
    jenjang: ['D3, D4'],
    rangeUangSaku: [100000, 2000000],
  },
  // Tambahkan data beasiswa lainnya sesuai kebutuhan
]

function calculateCosineSimilarity(vectorA, vectorB) {
  const matchingValues = [
    vectorA.ipk >= vectorB.ipk,
    vectorA.semester >= vectorB.semester,
    Array.isArray(vectorB.jurusan) &&
      (vectorA.jurusan === vectorB.jurusan ||
        vectorB.jurusan.includes(vectorA.jurusan)),
    vectorA.tipePendanaan === vectorB.tipePendanaan,
    Array.isArray(vectorB.jenjang) &&
      (vectorA.jenjang === vectorB.jenjang ||
        vectorB.jenjang.includes(vectorA.jenjang)),
    vectorA.rangeUangSaku[0] >= vectorB.rangeUangSaku[0] &&
      vectorA.rangeUangSaku[1] <= vectorB.rangeUangSaku[1],
  ]

  const dotProduct = matchingValues.reduce(
    (sum, value) => sum + (value ? 1 : 0),
    0,
  )
  const magnitudeVectorA = Math.sqrt(matchingValues.length)
  const magnitudeVectorB = Math.sqrt(Object.values(vectorB).length)

  const cosineSimilarity = dotProduct / (magnitudeVectorA * magnitudeVectorB)
  return cosineSimilarity
}

const BeasiswaScreen = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])

  useEffect(() => {
    const findMatchingBeasiswa = () => {
      const matchedBeasiswa = []

      for (const beasiswa of beasiswaData) {
        const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

        matchedBeasiswa.push({
          beasiswa: beasiswa,
          cosineSimilarity: cosineSimilarity,
        })
      }

      matchedBeasiswa.sort((a, b) => b.cosineSimilarity - a.cosineSimilarity)

      return matchedBeasiswa.slice(0, 10) // Ambil 10 beasiswa teratas
    }

    const matchedBeasiswa = findMatchingBeasiswa()
    setMatchingBeasiswa(matchedBeasiswa)
  }, [])

  const renderCard = (card) => {
    const beasiswa = card.beasiswa
    const cosineSimilarity = card.cosineSimilarity
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: 300,
        }}
      >
        <Text>{beasiswa.nama}</Text>
        <Text>Cosine Similarity: {cosineSimilarity}</Text>
      </View>
    )
  }

  const onSwipedAllCards = () => {
    console.log('Semua beasiswa telah ditampilkan')
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Top 10 Beasiswa:
      </Text>
      {matchingBeasiswa.length > 0 ? (
        <Swiper
          cards={matchingBeasiswa}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          cardIndex={0}
          backgroundColor="transparent"
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />
      ) : (
        <Text>Tidak ada beasiswa yang cocok</Text>
      )}
    </View>
  )
}

export default BeasiswaScreen

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
