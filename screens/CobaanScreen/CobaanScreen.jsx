import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import {
  calculateCosineSimilarity,
  calculateMatchingValues,
} from '../../lib/index'
import { firebase } from '../../firebase'

const MatchingApp = () => {
  const [userInput, setUserInput] = useState({})
  const [scholarships, setScholarships] = useState([])
  const [matchedScholarships, setMatchedScholarships] = useState([])

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const snapshot = await firebase.firestore().collection('beasiswa').get()
        const scholarshipsData = snapshot.docs.map((doc) => doc.data())
        setScholarships(scholarshipsData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchScholarships()
  }, [])

  useEffect(() => {
    if (Object.keys(userInput).length > 0) {
      const filteredScholarships = scholarships.filter((scholarship) => {
        const matchingValues = calculateMatchingValues(userInput, scholarship)
        return matchingValues.every((value) => value === true)
      })

      const matchedScholarshipsWithScore = filteredScholarships.map(
        (scholarship) => {
          const score = calculateCosineSimilarity(userInput, scholarship)
          return { ...scholarship, score }
        },
      )

      const sortedScholarships = matchedScholarshipsWithScore.sort(
        (a, b) => b.score - a.score,
      )

      setMatchedScholarships(sortedScholarships)
    }
  }, [userInput, scholarships])

  const handleConfirm = (userInput) => {
    console.log('anjay')
    setUserInput(userInput)
    console.log(matchedScholarships)
  }

  return (
    <View>
      {matchedScholarships.length > 0 ? (
        <Swiper
          cards={matchedScholarships}
          renderCard={(card) => (
            <View>
              <Text>{card.nama}</Text>
            </View>
          )}
          onSwiped={() => {}}
          onSwipedAll={() => {}}
          cardIndex={0}
          backgroundColor="white"
          stackSize={3}
          stackScale={10}
          stackSeparation={14}
          overlayLabels={{
            left: {
              title: 'Tidak Cocok',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'red',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'Cocok',
              style: {
                label: {
                  backgroundColor: 'green',
                  borderColor: 'green',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        />
      ) : (
        <View>
          <Text>IPK:</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({ ...userInput, ipk: parseFloat(text) })
            }
            keyboardType="numeric"
          />

          <Text>Semester:</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({ ...userInput, semester: parseInt(text) })
            }
            keyboardType="numeric"
          />

          <Text>Jurusan:</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({ ...userInput, jurusan: text })
            }
          />

          <Text>Tipe Pendanaan:</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({ ...userInput, tipePendanaan: text })
            }
          />

          <Text>Jenjang:</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({ ...userInput, jenjang: text })
            }
          />

          <Text>Range Uang Saku (Min):</Text>
          <TextInput
            onChangeText={(text) =>
              setUserInput({
                ...userInput,
                rangeUangSaku: text,
              })
            }
            keyboardType="numeric"
          />

          <Button title="Confirm" onPress={() => handleConfirm(userInput)} />
        </View>
      )}
    </View>
  )
}

export default MatchingApp

// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import { firebase } from '../../firebase'
// import { useEffect, useState } from 'react'
// import { calculateCosineSimilarity, calculateMatchingValues } from '../../lib'
// import { useNavigation } from '@react-navigation/native'

// const CobaanScreen = () => {
//   const [userVector, setUserVector] = useState({
//     ipk: '3.5',
//     semester: '2',
//     jurusan: 'Teknik Informatika',
//     tipePendanaan: 'Fully Funded',
//     jenjang: 'S1',
//     rangeUangSaku: '4000000-5000000',
//   })

//   const navigation = useNavigation()

//   const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
//   useEffect(() => {
//     const fetchBeasiswa = async () => {
//       try {
//         const beasiswaSnapshot = await firebase
//           .firestore()
//           .collection('beasiswa')
//           .get()
//         const beasiswaData = beasiswaSnapshot.docs.map((doc) => doc.data())
//         setMatchingBeasiswa(beasiswaData)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }

//     fetchBeasiswa()
//   }, [])

//   const findMatchingBeasiswa = () => {
//     const matchedBeasiswa = []

//     for (const card of matchingBeasiswa) {
//       const beasiswa = card.beasiswa
//       const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

//       matchedBeasiswa.push({
//         beasiswa: beasiswa,
//         cosineSimilarity: cosineSimilarity,
//       })
//     }

//     matchedBeasiswa.sort((a, b) => {
//       if (a.cosineSimilarity === b.cosineSimilarity) {
//         // Jika cosine similarity sama, bandingkan dengan input pengguna
//         const aMatchingValues = calculateMatchingValues(userVector, a.beasiswa)
//         const bMatchingValues = calculateMatchingValues(userVector, b.beasiswa)

//         const aMatchingCount = aMatchingValues.reduce(
//           (sum, value) => sum + (value ? 1 : 0),
//           0,
//         )
//         const bMatchingCount = bMatchingValues.reduce(
//           (sum, value) => sum + (value ? 1 : 0),
//           0,
//         )

//         return bMatchingCount - aMatchingCount // Urutkan berdasarkan jumlah kecocokan yang lebih tinggi
//       } else {
//         return b.cosineSimilarity - a.cosineSimilarity // Urutkan berdasarkan cosine similarity yang lebih tinggi
//       }
//     })

//     return matchedBeasiswa.slice(0, 10) // Ambil 10 beasiswa teratas
//   }

//   const handleFindMatchingBeasiswa = () => {
//     const matchedBeasiswa = findMatchingBeasiswa()
//     console.log(matchedBeasiswa)
//     setMatchingBeasiswa(matchedBeasiswa)
//   }

//   useEffect(() => {
//     console.log(matchingBeasiswa[0].nama)
//   }, [matchingBeasiswa])

//   return (
//     <View>
//       <Button title="confirm" onPress={handleFindMatchingBeasiswa} />
//       <Button
//         title="confirm"
//         onPress={() => {
//           navigation.goBack()
//         }}
//       />
//     </View>
//   )
// }

// export default CobaanScreen
