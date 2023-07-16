import React, { useState } from 'react'
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
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
  const [isModalVisible, setIsModalVisible] = useState(false)

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
    selectedCard,
    setSelectedCard,
    handleSwipeLeft,
    handleSwipeRight,
    swiperRef,
  } = useMatching()

  const handleFindMatchingBeasiswa = (index) => {
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
    setSelectedCard(matchedBeasiswa[0])
    if (selectedCard) {
      swiperRef.current.swipeLeft()
    }
    setIsConfirmed(true)
  }

  const onSwipedAllCards = () => {
    setMatchingBeasiswa(allBeasiswa)
    setIsConfirmed(false)
  }

  const handleSwiped = (index) => {
    setSelectedCard(matchingBeasiswa[index + 1])
  }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const renderCard = (card, index) => {
    const beasiswa = card.beasiswa

    if (!beasiswa) {
      setIsConfirmed(false)
      return
    }

    return (
      <Pressable
        // onPress={toggleModal}
        key={beasiswa.id}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: 420,
          position: 'relative',
          borderRadius: 20,
          marginTop: 60,
          borderWidth: 1,
          borderColor: '#E4E4E4',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
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
          <TouchableOpacity onPress={toggleModal}>
            <Text>Lihat</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    )
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
            ref={swiperRef}
            stackSize={3}
            stackSeparation={15}
            backgroundColor="transparant"
            onSwipedRight={() => {
              console.log('Swipe right')
            }}
            onSwipedLeft={() => {
              console.log('Swipe Left')
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
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
              onPress={handleSwipeRight}
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
              onPress={handleSwipeLeft}
            >
              <Entypo name="heart" size={30} />
            </TouchableOpacity>
          </View>
          {isModalVisible && (
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={toggleModal}
            >
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>Modal Muncul</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleModal}
                >
                  <Text style={styles.closeButtonText}>
                    {selectedCard.beasiswa.nama}
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </View>
      ) : (
        <View
          style={{
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
                      marginBottom: 160,
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
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default FormMatching
