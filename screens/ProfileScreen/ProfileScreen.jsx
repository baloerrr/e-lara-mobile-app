import React, { useRef, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'

const beasiswaData = [
  {
    id: 1,
    nama: 'Beasiswa ABC',
    ipk: 3.0,
    semester: 5,
    jurusan: ['Teknik Informatika'],
    tipePendanaan: 1,
    jenjang: ['S1'],
    rangeUangSaku: [800000, 2000000],
  },
  {
    id: 2,
    nama: 'Beasiswa XYZ',
    ipk: 3.0,
    semester: 6,
    jurusan: ['Teknik Sipil'],
    tipePendanaan: 1,
    jenjang: ['S1'],
    rangeUangSaku: [1200000, 2500000],
  },
  {
    id: 3,
    nama: 'Beasiswa PQR',
    ipk: 3.0,
    semester: 7,
    jurusan: ['Akuntansi', 'Manajemen'],
    tipePendanaan: 2,
    jenjang: ['S1'],
    rangeUangSaku: [1500000, 3000000],
  },
  {
    id: 4,
    nama: 'Beasiswa MNO',
    ipk: 3.0,
    semester: 4,
    jurusan: ['Ilmu Komunikasi'],
    tipePendanaan: 1,
    jenjang: ['S1'],
    rangeUangSaku: [1000000, 2500000],
  },
  {
    id: 5,
    nama: 'Beasiswa DEF',
    ipk: 3.0,
    semester: 3,
    jurusan: ['Teknik Industri'],
    tipePendanaan: 2,
    jenjang: ['S1'],
    rangeUangSaku: [2000000, 4000000],
  },
  // Tambahkan data beasiswa lainnya dengan nilai yang berbeda
]

// const beasiswaData = [
//   {
//     id: 1,
//     nama: 'BANK BI',
//     ipk: 3.0,
//     semester: 3,
//     jurusan: ['Teknik Komputer', 'Teknik Elektro'],
//     tipePendanaan: 0,
//     jenjang: ['S2', 'D3'],
//     rangeUangSaku: [500000, 1500000],
//   },
//   {
//     id: 2,
//     nama: 'DIcoding',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Teknik Informatika', 'Teknik Elektro'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 3,
//     nama: 'Salemba Empat',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Akuntansi', 'Bahasa Inggris'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [500000, 2000000],
//   },
//   {
//     id: 4,
//     nama: 'Koridor',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Teknik Mesin', 'Teknik Elektro', 'TekniK Informatika'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [300000, 2000000],
//   },
//   {
//     id: 5,
//     nama: 'LPDP',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Akuntansi', 'Teknik Kimia'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 6,
//     nama: 'Beasiswa A',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Teknik Elektro'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 7,
//     nama: 'Beasiswa B',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Ilmu Komputer', 'Sistem Informasi'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 8,
//     nama: 'Beasiswa C',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Teknik Mesin', 'Teknik Elektro'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 9,
//     nama: 'Beasiswa D',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Teknik Mesin', 'Teknik Elektro'],
//     tipePendanaan: 0,
//     jenjang: ['S1'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 10,
//     nama: 'Beasiswa E',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Ilmu Komputer', 'Sistem Informasi'],
//     tipePendanaan: 0,
//     jenjang: ['S1, D3, D4'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   {
//     id: 11,
//     nama: 'Beasiswa F',
//     ipk: 3.5,
//     semester: 4,
//     jurusan: ['Manajemen'],
//     tipePendanaan: 0,
//     jenjang: ['D3, D4'],
//     rangeUangSaku: [100000, 2000000],
//   },
//   // Tambahkan data beasiswa lainnya sesuai kebutuhan
// ]

function calculateCosineSimilarity(vectorA, vectorB) {
  const matchingValues = [
    vectorA.ipk >= vectorB.ipk,
    vectorA.semester >= vectorB.semester,
    Array.isArray(vectorA.jurusan) && vectorA.jurusan.includes(vectorB.jurusan),
    vectorA.tipePendanaan === vectorB.tipePendanaan,
    Array.isArray(vectorA.jenjang) && vectorA.jenjang.includes(vectorB.jenjang),
    vectorA.rangeUangSaku[0] >= vectorB.rangeUangSaku[0] &&
      vectorA.rangeUangSaku[1] <= vectorB.rangeUangSaku[1],
  ]

  const dotProduct = matchingValues.reduce(
    (sum, value) => sum + (value ? 1 : 0),
    0,
  )
  const magnitudeVectorA = Math.sqrt(matchingValues.length)
  const magnitudeVectorB = Math.sqrt(Object.values(vectorB).length)

  const cosineSimilarity =
    dotProduct / (magnitudeVectorA * magnitudeVectorB).toFixed(3)

  console.log(cosineSimilarity)
  return cosineSimilarity
}

const BeasiswaScreen = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
  const [userVector, setUserVector] = useState({
    ipk: '',
    semester: '',
    jurusan: '',
    tipePendanaan: '',
    jenjang: '',
    rangeUangSaku: '',
  })

  const findMatchingBeasiswa = () => {
    const matchedBeasiswa = []

    for (const beasiswa of beasiswaData) {
      const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

      matchedBeasiswa.push({
        beasiswa: beasiswa,
        cosineSimilarity: cosineSimilarity,
      })
    }

    matchedBeasiswa.sort((a, b) => {
      if (a.cosineSimilarity === b.cosineSimilarity) {
        // Jika cosine similarity sama, bandingkan dengan input pengguna
        const aMatchingValues = calculateMatchingValues(userVector, a.beasiswa)
        const bMatchingValues = calculateMatchingValues(userVector, b.beasiswa)

        const aMatchingCount = aMatchingValues.reduce(
          (sum, value) => sum + (value ? 1 : 0),
          0,
        )
        const bMatchingCount = bMatchingValues.reduce(
          (sum, value) => sum + (value ? 1 : 0),
          0,
        )

        return bMatchingCount - aMatchingCount // Urutkan berdasarkan jumlah kecocokan yang lebih tinggi
      } else {
        return b.cosineSimilarity - a.cosineSimilarity // Urutkan berdasarkan cosine similarity yang lebih tinggi
      }
    })

    return matchedBeasiswa.slice(0, 10) // Ambil 10 beasiswa teratas
  }

  function calculateMatchingValues(userVector, beasiswa) {
    return [
      userVector.ipk >= beasiswa.ipk,
      userVector.semester >= beasiswa.semester,
      Array.isArray(userVector.jurusan) &&
        userVector.jurusan.includes(beasiswa.jurusan),
      userVector.tipePendanaan === beasiswa.tipePendanaan,
      Array.isArray(userVector.jenjang) &&
        userVector.jenjang.includes(beasiswa.jenjang),
      userVector.rangeUangSaku[0] >= beasiswa.rangeUangSaku[0] &&
        userVector.rangeUangSaku[1] <= beasiswa.rangeUangSaku[1],
    ]
  }

  const handleFindMatchingBeasiswa = () => {
    const matchedBeasiswa = findMatchingBeasiswa()
    setMatchingBeasiswa(matchedBeasiswa)
  }

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
      <TextInput
        placeholder="IPK"
        value={userVector.ipk}
        onChangeText={(value) => setUserVector({ ...userVector, ipk: value })}
      />
      <TextInput
        placeholder="Semester"
        value={userVector.semester}
        onChangeText={(value) =>
          setUserVector({ ...userVector, semester: value })
        }
      />
      <TextInput
        placeholder="Jurusan"
        value={userVector.jurusan}
        onChangeText={(value) =>
          setUserVector({ ...userVector, jurusan: value })
        }
      />
      <TextInput
        placeholder="Tipe Pendanaan"
        value={userVector.tipePendanaan}
        onChangeText={(value) =>
          setUserVector({ ...userVector, tipePendanaan: value })
        }
      />
      <TextInput
        placeholder="Jenjang"
        value={userVector.jenjang}
        onChangeText={(value) =>
          setUserVector({ ...userVector, jenjang: value })
        }
      />
      <TextInput
        placeholder="Range Uang Saku"
        value={userVector.rangeUangSaku}
        onChangeText={(value) =>
          setUserVector({ ...userVector, rangeUangSaku: value })
        }
      />
      {/* Tambahkan TextInput untuk atribut-atribut lainnya */}
      <Button title="Submit" onPress={handleFindMatchingBeasiswa} />
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
