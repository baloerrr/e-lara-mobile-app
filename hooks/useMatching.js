import { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import {
  calculateCosineSimilarity,
  calculateMatchingValues,
} from '../lib/index'

const useMatching = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
  const [allBeasiswa, setAllBeasiswa] = useState([])
  const [selectedBeasiswaId, setSelectedBeasiswaId] = useState(null)

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

  const handleSaveButtonPress = (beasiswaId) => {
    setSelectedBeasiswaId(beasiswaId);
  };

  const handleSaveBeasiswa = () => {
    const selectedBeasiswa = matchingBeasiswa.find(
      (item) => {
          item.id == selectedBeasiswaId,
          console.log(selectedBeasiswaId)
    }
        
    )

    if (!selectedBeasiswa) {
      console.log('Beasiswa tidak ditemukan')
      return
    }

    // Simpan data beasiswa ke dalam database
    firebase
      .firestore()
      .collection('savedBeasiswa')
      .add(selectedBeasiswa.beasiswa)
      .then(() => {
        console.log('Beasiswa berhasil disimpan')
        // Lakukan tindakan lain setelah penyimpanan berhasil
      })
      .catch((error) => {
        console.log('Gagal menyimpan beasiswa:', error)
        // Lakukan tindakan lain jika terjadi kesalahan saat penyimpanan
      })
  }

  return {
    matchingBeasiswa,
    setMatchingBeasiswa,
    findMatchingBeasiswa,
    allBeasiswa,
    handleSaveBeasiswa,
    handleSaveButtonPress
  }
}

export default useMatching
