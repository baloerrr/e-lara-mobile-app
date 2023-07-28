import { useState, useEffect, useRef } from 'react'
import { firebase } from '../firebase'
import {
  calculateCosineSimilarity,
  calculateMatchingValues,
} from '../lib/index'
import { Alert, ToastAndroid } from 'react-native'

const useMatching = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
  const [allBeasiswa, setAllBeasiswa] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const swiperRef = useRef(null)


  useEffect(() => {
    const fetchBeasiswa = async () => {
      try {
        const beasiswaSnapshot = await firebase
          .firestore()
          .collection('beasiswa')
          .get()
        const beasiswaData = beasiswaSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setAllBeasiswa(beasiswaData)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchBeasiswa()
  }, [])

  const findMatchingBeasiswa = (userVector) => {
    let matchedBeasiswa = []

    for (const beasiswa of allBeasiswa) {
      const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

      matchedBeasiswa.push({
        id: beasiswa.id,
        beasiswa: beasiswa,
        cosineSimilarity: cosineSimilarity,
      })
    }

    matchedBeasiswa.sort((a, b) => {
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

      if (aMatchingCount === bMatchingCount) {
        return b.cosineSimilarity - a.cosineSimilarity
      } else {
        return bMatchingCount - aMatchingCount
      }
    })

    const top10Beasiswa = matchedBeasiswa.slice(0, 10)

    return top10Beasiswa
  }

  const handleSwipeLeft = async () => {
    if (selectedCard) {
      const beasiswaId = selectedCard.beasiswa.id;
      const currentUser = firebase.auth().currentUser.uid
      const timeStamps = firebase.firestore.FieldValue.serverTimestamp()

      try {
       const snapshot = firebase.firestore()
        .collection('savedBeasiswa')
        .where('id', '==', beasiswaId)
        .where('userId', '==', currentUser)
        .get();

        if(snapshot > 0) {
          Alert.alert('Peringatan', 'Kartu ini sudah tersimpan');
        }  else {
          const beasiswaData = {
            ...selectedCard.beasiswa,
            userId: currentUser,
            timeStamps: firebase.firestore.FieldValue.serverTimestamp(),
          };
  
          await firebase.firestore().collection('savedBeasiswa').add(beasiswaData);
          ToastAndroid.show('Kartu tersimpan selama 24 jam', ToastAndroid.SHORT);
          swiperRef.current.swipeLeft();
        }
      } catch (error) {
        console.log('Gagal menyimpan card ke database:', error.message);
      }
    }
  };

  const handleSwipeRight = () => {
    swiperRef.current.swipeRight()
  }

  return {
    matchingBeasiswa,
    setMatchingBeasiswa,
    findMatchingBeasiswa,
    allBeasiswa,
    handleSwipeLeft,
    handleSwipeRight,
    selectedCard, 
    setSelectedCard,
    swiperRef
  }
}

export default useMatching
