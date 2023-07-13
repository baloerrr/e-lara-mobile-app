import React, { useState } from 'react'
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import DropDownPicker from 'react-native-dropdown-picker'
import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  jenjangItems,
  jurusanItems,
  rangeUangSakuItems,
} from '../../constants/DropdownItems'
import useDropdownState from '../../hooks/useDropdownState'
import FundingOptions from '../../components/FundingOptions/FundingOptions'
import { Slider } from '@rneui/themed'
import useMatching from '../../hooks/useMatching'
import { Entypo } from '@expo/vector-icons'
import { firebase } from '../../firebase'
import { useEffect } from 'react'

const FormMatching = () => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [userVector, setUserVector] = useState({
    ipk: '',
    semester: '',
    jurusan: '',
    tipePendanaan: '',
    jenjang: '',
    rangeUangSaku: [0, 1000],
  })
  const [selectedCard, setSelectedCard] = useState(null)

  const clearFilters = () => {
    setUserVector({
      ipk: '',
      semester: '',
      jurusan: '',
      tipePendanaan: '',
      jenjang: '',
      rangeUangSaku: '',
    })
  }

  const { jenjangState, jurusanState, rangeUangSakuState } = useDropdownState()

  const {
    matchingBeasiswa,
    setMatchingBeasiswa,
    findMatchingBeasiswa,
    allBeasiswa,
    handleSaveBeasiswa,
    // handleSaveButtonPress,
  } = useMatching()

  useEffect(() => {
    setSelectedCard(matchingBeasiswa[0]) // Mengatur card pertama sebagai selectedCard saat matchingBeasiswa berubah
  }, [matchingBeasiswa])

  const handleFindMatchingBeasiswa = () => {
    if (
      !userVector.ipk ||
      !userVector.semester ||
      !userVector.jurusan ||
      !userVector.tipePendanaan ||
      !userVector.jenjang ||
      !userVector.rangeUangSaku
    ) {
      Alert.alert('Peringatan', 'Harap isi semua kolom input terlebih dahulu.')
      return
    }

    const matchedBeasiswa = findMatchingBeasiswa(userVector)
    setMatchingBeasiswa(matchedBeasiswa)
    setIsConfirmed(true)
  }

  const handleSaveButtonPress = () => {
    if (selectedCard) {
      // Menyimpan card yang dipilih ke Firestore
      firebase
        .firestore()
        .collection('savedBeasiswa')
        .add(selectedCard.beasiswa)
        .then(() => {
          console.log('Card berhasil disimpan ke database')
          // Lakukan tindakan lain setelah card berhasil disimpan
          // ...
        })
        .catch((error) => {
          console.log('Gagal menyimpan card ke database:', error.message)
          // Lakukan penanganan error jika diperlukan
          // ...
        })
    }
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'transparant',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            padding: 15,
          }}
        >
          <Text>{beasiswa.nama}</Text>
          <Text>{beasiswa.tipePendanaan}</Text>
          {/* <Text>Cosine Similarity: {cosineSimilarity}</Text> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 100,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              width: 64,
              height: 64,
            }}
          >
            <Entypo name="cross" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              width: 64,
              height: 64,
            }}
            onPress={() => handleSaveButtonPress()}
          >
            <Entypo name="heart" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const onSwipedAllCards = () => {
    setMatchingBeasiswa(allBeasiswa)
    setIsConfirmed(false)
  }

  const handleSwiped = (index) => {
    setSelectedCard(matchingBeasiswa[index])
    console.log(matchingBeasiswa[index])
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {isConfirmed && matchingBeasiswa.length > 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 355,
              paddingTop: 20,
              alignItems: 'center',
            }}
          >
            <HeaderComponent title="Matches" />
          </View>
          <Swiper
            cards={matchingBeasiswa}
            renderCard={renderCard}
            onSwipedAll={onSwipedAllCards}
            onSwiped={handleSwiped}
            stackSize={3}
            stackSeparation={15}
            cardIndex={0}
            backgroundColor="transparent"
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 100,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                width: 64,
                height: 64,
              }}
            >
              <Entypo name="cross" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                width: 64,
                height: 64,
              }}
              onPress={handleSaveBeasiswa}
            >
              <Entypo name="heart" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={[{ key: 'form' }]}
          renderItem={() => (
            <View
              style={{
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 355,
                  paddingTop: 20,
                  alignItems: 'center',
                }}
              >
                <HeaderComponent title={'Filters'} />
                <TouchableOpacity onPress={clearFilters}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: '#3F4BF2',
                    }}
                  >
                    Clear
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  marginHorizontal: 20,
                  borderRadius: 15,
                  gap: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Tipe Pendanaan
                  </Text>
                  <FundingOptions
                    selectedOption={userVector.tipePendanaan}
                    onOptionChange={(option) => {
                      setUserVector((prevUserVector) => ({
                        ...prevUserVector,
                        tipePendanaan: option,
                      }))
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Jurusan
                  </Text>
                  <DropDownPicker
                    containerStyle={{ zIndex: 4 }}
                    placeholder="Pilih Jurusan"
                    placeholderStyle={{ color: 'grey' }}
                    searchable={true}
                    searchPlaceholder="Cari jurusan anda"
                    searchContainerStyle={{}}
                    dropDownDirection="TOP"
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
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Jenjang
                  </Text>
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
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Indeks Prestasi Kumulatif
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    {userVector.ipk}
                  </Text>
                </View>
                <Slider
                  value={userVector.ipk}
                  minimumValue={0}
                  maximumValue={4}
                  step={0.01}
                  thumbTintColor="#3F4BF2"
                  thumbStyle={{ width: 35, height: 35, borderRadius: 20 }}
                  minimumTrackTintColor="#3F4BF2"
                  maximumTrackTintColor="#A0A4A8"
                  onValueChange={(value) => {
                    const roundedValue = Number(value.toFixed(2))
                    setUserVector((prevUserVector) => ({
                      ...prevUserVector,
                      ipk: roundedValue,
                    }))
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Semester
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    {userVector.semester}
                  </Text>
                </View>
                <Slider
                  value={userVector.semester}
                  minimumValue={0}
                  maximumValue={14}
                  step={1}
                  thumbTintColor="#3F4BF2"
                  thumbStyle={{ width: 35, height: 35, borderRadius: 20 }}
                  minimumTrackTintColor="#3F4BF2"
                  maximumTrackTintColor="#A0A4A8"
                  onValueChange={(value) => {
                    setUserVector((prevUserVector) => ({
                      ...prevUserVector,
                      semester: value,
                    }))
                  }}
                />

                {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TextInput
                style={{
                  width: '40%',
                  height: 40,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
                value={userVector.rangeUangSaku[0].toString()}
                onChangeText={(value) => {
                  setUserVector((prevUserVector) => ({
                    ...prevUserVector,
                    rangeUangSaku: [
                      Number(value),
                      prevUserVector.rangeUangSaku[1],
                    ],
                  }))
                }}
                keyboardType="numeric"
                placeholder="Minimum Value"
              />
              <TextInput
                style={{
                  width: '40%',
                  height: 40,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  paddingHorizontal: 10,
                  borderRadius: 5,
                }}
                value={userVector.rangeUangSaku[1].toString()}
                onChangeText={(value) => {
                  setUserVector((prevUserVector) => ({
                    ...prevUserVector,
                    rangeUangSaku: [
                      prevUserVector.rangeUangSaku[0],
                      Number(value),
                    ],
                  }))
                }}
                keyboardType="numeric"
                placeholder="Maximum Value"
              />

              {console.log(userVector.rangeUangSaku.join('-'))}
            </View> */}

                <View
                  style={{
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>
                    Range Uang Saku
                  </Text>
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
                      setUserVector({
                        ...userVector,
                        rangeUangSaku: item.value,
                      })
                    }
                  />
                </View>

                <TouchableOpacity
                  style={{
                    paddingVertical: 7,
                    paddingHorizontal: 72,
                    borderRadius: 4,
                    elevation: 3,
                    backgroundColor: '#3F4BF2',
                    borderRadius: 15,
                    width: 315,
                    height: 55,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 70,
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
        />
      )}
    </View>
  )
}

export default FormMatching
