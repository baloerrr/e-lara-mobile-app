import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import {
  calculateCosineSimilarity,
  calculateMatchingValues,
} from '../../lib/index'
import Swiper from 'react-native-deck-swiper'
import { firebase } from '../../firebase'
import DropDownPicker from 'react-native-dropdown-picker'
import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  jenjangItems,
  jurusanItems,
  rangeUangSakuItems,
  semesterItems,
  tipePendanaanItems,
} from '../../constants/DropdownItems'
import useDropdownState from '../../hooks/useDropdownState'

const FormMatching = () => {
  const [matchingBeasiswa, setMatchingBeasiswa] = useState([])
  const [allBeasiswa, setAllBeasiswa] = useState([])
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [userVector, setUserVector] = useState({
    ipk: '',
    semester: '',
    jurusan: '',
    tipePendanaan: '',
    jenjang: '',
    rangeUangSaku: '',
  })
  const {
    jenjangState,
    jurusanState,
    rangeUangSakuState,
    semesterState,
    tipePendanaanState,
  } = useDropdownState()

  useEffect(() => {
    const fetchBeasiswa = async () => {
      try {
        const beasiswaSnapshot = await firebase
          .firestore()
          .collection('beasiswa')
          .get()
        const beasiswaData = beasiswaSnapshot.docs.map((doc) => doc.data())
        setAllBeasiswa(beasiswaData)
        setMatchingBeasiswa(beasiswaData)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchBeasiswa()
  }, [])

  const findMatchingBeasiswa = () => {
    let matchedBeasiswa = []

    for (const beasiswa of matchingBeasiswa) {
      const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

      matchedBeasiswa.push({
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
        return b.cosineSimilarity - a.cosineSimilarity // Prioritize higher cosine similarity
      } else {
        return bMatchingCount - aMatchingCount // Prioritize higher matching count
      }
    })

    const top10Beasiswa = matchedBeasiswa.slice(0, 9)

    return top10Beasiswa
  }

  const handleFindMatchingBeasiswa = () => {
    const matchedBeasiswa = findMatchingBeasiswa()
    setMatchingBeasiswa(matchedBeasiswa)
    setIsConfirmed(true)
  }

  const renderCard = (card) => {
    const beasiswa = card.beasiswa

    if (!beasiswa) {
      setIsConfirmed(false)
      return
    }

    return (
      <View
        key={beasiswa.id}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: 420,
          position: 'relative',
          borderRadius: 20,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 20,
          }}
          resizeMode="contain"
          source={{ uri: beasiswa.gambar }}
        />
        {/* <Text>{beasiswa.nama}</Text> */}
        {/* <Text>Cosine Similarity: {cosineSimilarity}</Text> */}
      </View>
    )
  }

  const onSwipedAllCards = () => {
    setMatchingBeasiswa(allBeasiswa)
    setIsConfirmed(false)
  }

  return (
    <View style={{ flex: 1 }}>
      {isConfirmed && matchingBeasiswa.length > 0 ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <HeaderComponent />
          </View>
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
        </View>
      ) : (
        <View style={{ flexDirection: 'column', gap: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <HeaderComponent />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
            >
              Form Matching
            </Text>
            <TextInput
              placeholder="Masukkan IPK anda"
              style={{
                paddingVertical: 7,
                paddingHorizontal: 10,
                backgroundColor: '#f8faf9',
                borderRadius: 10,
                width: 315,
                height: 50,
              }}
              value={userVector.ipk}
              onChangeText={(value) =>
                setUserVector({ ...userVector, ipk: value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 5 }}
              placeholder="Pilih Minimal Semester"
              placeholderStyle={{ color: 'grey' }}
              items={semesterItems}
              open={semesterState.open}
              setOpen={semesterState.setOpen}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, semester: item.value })
              }
              value={semesterState.value}
              setValue={semesterState.setValue}
            />

            <DropDownPicker
              containerStyle={{ zIndex: 4 }}
              placeholder="Pilih Jurusan"
              placeholderStyle={{ color: 'grey' }}
              searchable={true}
              searchPlaceholder="Cari jurusan anda"
              searchContainerStyle={{}}
              maxHeight={100}
              items={jurusanItems}
              open={jurusanState.open}
              setOpen={jurusanState.setOpen}
              value={jurusanState.value}
              setValue={jurusanState.setValue}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, jurusan: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 3 }}
              placeholder="Pilih Tipe Pendanaan"
              placeholderStyle={{ color: 'grey' }}
              items={tipePendanaanItems}
              open={tipePendanaanState.open}
              setOpen={tipePendanaanState.setOpen}
              value={tipePendanaanState.value}
              setValue={tipePendanaanState.setValue}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, tipePendanaan: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 2 }}
              placeholder="Pilih Jenjang"
              placeholderStyle={{ color: 'grey' }}
              items={jenjangItems}
              open={jenjangState.open}
              setOpen={jenjangState.setOpen}
              value={jenjangState.value}
              setValue={jenjangState.setValue}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, jenjang: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 1 }}
              placeholder="Pilih range uang saku"
              placeholderStyle={{ color: 'grey' }}
              items={rangeUangSakuItems}
              open={rangeUangSakuState.open}
              setOpen={rangeUangSakuState.setOpen}
              value={rangeUangSakuState.value}
              setValue={rangeUangSakuState.setValue}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, rangeUangSaku: item.value })
              }
            />
            {/* Tambahkan TextInput untuk atribut-atribut lainnya */}
            <TouchableOpacity
              style={{
                paddingVertical: 7,
                paddingHorizontal: 72,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'orange',
                borderRadius: 10,
                width: 315,
                height: 55,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleFindMatchingBeasiswa}
            >
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 21,
                  fontWeight: 'bold',
                  letterSpacing: 0.25,
                  color: 'white',
                }}
              >
                Konfirmasi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default FormMatching
