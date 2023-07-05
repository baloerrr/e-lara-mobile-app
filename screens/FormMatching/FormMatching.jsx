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
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  const [openJurusan, setOpenJurusan] = useState(false)
  const [valueJurusan, setValueJurusan] = useState(null)

  const [openJenjang, setOpenJenjang] = useState(false)
  const [valueJenjang, setValueJenjang] = useState(null)

  const [openSemester, setOpenSemester] = useState(false)
  const [valueSemester, setValueSemester] = useState(null)

  const [openTipePendanaan, setOpenTipePendanaan] = useState(false)
  const [valueTipePendanaan, setValueTipePendanaan] = useState(null)

  const [openRangeUangSaku, setOpenRangeUangSaku] = useState(false)
  const [valueRangeUangSaku, setValueRangeUangSaku] = useState(null)

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
    let matchedBeasiswa = []

    for (const beasiswa of matchingBeasiswa) {
      const cosineSimilarity = calculateCosineSimilarity(userVector, beasiswa)

      matchedBeasiswa.push({ beasiswa: beasiswa })
    }

    matchedBeasiswa.sort((a, b) => {
      if (a.cosineSimilarity === b.cosineSimilarity) {
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

        return bMatchingCount - aMatchingCount
      } else {
        return b.cosineSimilarity - a.cosineSimilarity
      }
    })

    const top10Beasiswa = matchedBeasiswa.slice(0, 9)

    // try {
    //   await AsyncStorage.setItem(
    //     'matchedBeasiswa',
    //     JSON.stringify(top10Beasiswa),
    //   )
    // } catch (error) {
    //   console.log(error.message)
    // }

    top10Beasiswa.map((data) => {
      console.log(data)
    })

    return top10Beasiswa
  }

  const handleFindMatchingBeasiswa = () => {
    const matchedBeasiswa = findMatchingBeasiswa()
    setMatchingBeasiswa(matchedBeasiswa)
    setIsConfirmed(true)
  }

  const renderCard = (card) => {
    const beasiswa = card.beasiswa

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
        {/* <Text>{beasiswa.beasiswa.nama}</Text>
        <Text>Cosine Similarity: {cosineSimilarity}</Text> */}
      </View>
    )
  }

  const onSwipedAllCards = () => {
    console.log('Semua beasiswa telah ditampilkan')
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
              items={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },
              ]}
              open={openSemester}
              setOpen={setOpenSemester}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, semester: item.value })
              }
              value={valueSemester}
              setValue={setValueSemester}
            />

            <DropDownPicker
              containerStyle={{ zIndex: 4 }}
              placeholder="Pilih Jurusan"
              placeholderStyle={{ color: 'grey' }}
              items={[
                { label: 'Teknik Informatika', value: 'teknik informatika' },
                { label: 'Ilmu Komputer', value: 'ilmu komputer' },
                { label: 'Teknik Elektro', value: 'teknik elektro' },
                { label: 'Teknologi Informasi', value: 'teknologi informasi' },
                {
                  label: 'Teknik Telekomunikasi',
                  value: 'teknik telekomunikasi',
                },
                { label: 'Semua Jurusan', value: 'semua jurusan' },
              ]}
              open={openJurusan}
              setOpen={setOpenJurusan}
              value={valueJurusan}
              setValue={setValueJurusan}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, jurusan: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 3 }}
              placeholder="Pilih Tipe Pendanaan"
              placeholderStyle={{ color: 'grey' }}
              items={[
                { label: 'Fully Funded', value: 'fully funded' },
                { label: 'Partial Funded', value: 'partial funded' },
              ]}
              open={openTipePendanaan}
              setOpen={setOpenTipePendanaan}
              value={valueTipePendanaan}
              setValue={setValueTipePendanaan}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, tipePendanaan: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 2 }}
              placeholder="Pilih Jenjang"
              placeholderStyle={{ color: 'grey' }}
              items={[
                { label: 'S1', value: 's1' },
                { label: 'S2', value: 's2' },
                { label: 'D3', value: 'd3' },
                { label: 'D4', value: 'd4' },
              ]}
              open={openJenjang}
              setOpen={setOpenJenjang}
              value={valueJenjang}
              setValue={setValueJenjang}
              onSelectItem={(item) =>
                setUserVector({ ...userVector, jenjang: item.value })
              }
            />

            <DropDownPicker
              containerStyle={{ zIndex: 1 }}
              placeholder="Pilih range uang saku"
              placeholderStyle={{ color: 'grey' }}
              items={[
                { label: '1.000.000-2.000.000', value: '1000000-2000000' },
                { label: '4.000.000-5.000.000', value: '4000000-5000000' },
              ]}
              open={openRangeUangSaku}
              setOpen={setOpenRangeUangSaku}
              value={valueRangeUangSaku}
              setValue={setValueRangeUangSaku}
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
