import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import {
  calculateCosineSimilarity,
  calculateMatchingValues,
} from '../../lib/index'
import Swiper from 'react-native-deck-swiper'
import { firebase } from '../../firebase'
import { useNavigation } from '@react-navigation/native'

const FormMatching = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [userVector, setUserVector] = useState({
    ipk: '',
    semester: '',
    jurusan: '',
    tipePendanaan: '',
    jenjang: '',
    rangeUangSaku: '',
  })

  useEffect(() => {
    const fetchBeasiswa = async () => {
      try {
        const beasiswaSnapshot = await firebase
          .firestore()
          .collection('beasiswa')
          .get()
        const beasiswaData = beasiswaSnapshot.docs.map((doc) => doc.data())
        setMatchingBeasiswa(beasiswaData)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchBeasiswa()
  }, [])

  const findMatchingBeasiswa = () => {
    const matchedBeasiswa = []

    for (const beasiswa of matchingBeasiswa) {
      const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

      matchedBeasiswa.push({
        beasiswa: beasiswa,
        cosineSimilarity: cosineSimilarity,
      })
    }

    matchedBeasiswa.sort((a, b) => {
      if (a.cosineSimilarity === b.cosineSimilarity) {
        // Jika cosine similarity sama, bandingkan dengan input pengguna
        const aMatchingValues =
          calculateMatchingValues(userVector, a.beasiswa) || []
        const bMatchingValues =
          calculateMatchingValues(userVector, b.beasiswa) || []

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

  const handleFindMatchingBeasiswa = () => {
    const matchedBeasiswa = findMatchingBeasiswa()
    console.log(matchedBeasiswa)
    setMatchingBeasiswa(matchedBeasiswa)
    setIsConfirmed(true)
  }

  const renderCard = (card) => {
    const beasiswa = card
    const cosineSimilarity = card.cosineSimilarity

    if (!beasiswa.beasiswa.nama) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Top 10 Beasiswa:
          </Text>
          <TextInput
            placeholder="IPK"
            value={userVector.ipk}
            onChangeText={(value) =>
              setUserVector({ ...userVector, ipk: value })
            }
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
        </View>
      ) // Jika objek beasiswa tidak memiliki properti 'nama', maka tampilkan null
    }

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: 300,
        }}
      >
        <Text>{beasiswa.beasiswa.nama}</Text>
        {/* <Text>Cosine Similarity: {cosineSimilarity}</Text> */}
      </View>
    )
  }

  const onSwipedAllCards = () => {
    console.log('Semua beasiswa telah ditampilkan')
  }

  return (
    <View style={{ flex: 1 }}>
      {isConfirmed && matchingBeasiswa.length > 0 ? (
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
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
            Top 10 Beasiswa:
          </Text>
          <TextInput
            placeholder="IPK"
            value={userVector.ipk}
            onChangeText={(value) =>
              setUserVector({ ...userVector, ipk: value })
            }
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
        </View>
      )}
    </View>
  )
}

export default FormMatching

// menggunakan library react-native-deck-swipet
