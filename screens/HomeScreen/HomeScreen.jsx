import React, { useState } from 'react'
import { View, Alert, Text, TouchableOpacity, FlatList } from 'react-native'
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
import { Entypo, FontAwesome } from '@expo/vector-icons'
import useCustomFonts from '../../hooks/useCustomFonts'
import ModalDetail from '../../components/Modal/ModalDetail'
import SwiperCard from '../../components/Swiper/SwiperCard'

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
  const { jenjangState, jurusanState, rangeUangSakuState } = useDropdownState()
  const fontsLoaded = useCustomFonts()
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

  const clearFilters = () => {
    setUserVector({
      ipk: '',
      semester: '',
      jurusan: '',
      tipePendanaan: '',
      jenjang: '',
      rangeUangSaku: '',
    })
    jurusanState.reset()
    jenjangState.reset()
    rangeUangSakuState.reset()
  }

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

  if (!fontsLoaded) {
    return null
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
              flexDirection: 'column',
              marginTop: 20,
              marginHorizontal: 20,
              gap: 8,
              alignItems: 'center',
            }}
          >
            <HeaderComponent title="Matching" />
            <Text
              style={{
                fontSize: 17,
                lineHeight: 22,
                fontFamily: 'Modernist-Regular',
              }}
            >
              temukan beasiswa impian mu disini!!
            </Text>
          </View>
          <Swiper
            cards={matchingBeasiswa}
            renderCard={SwiperCard}
            onSwipedAll={onSwipedAllCards}
            onSwiped={handleSwiped}
            ref={swiperRef}
            verticalSwipe={false}
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
              alignItems: 'center',
              marginBottom: 100,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#E4E4E4',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                width: 64,
                height: 64,
              }}
              onPress={handleSwipeRight}
            >
              <Entypo color={'#A661ED'} name="cross" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#A661ED',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                width: 80,
                height: 80,
              }}
              onPress={handleSwipeLeft}
            >
              <Entypo color={'#FFFFFF'} name="heart" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#EEEEEE',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                width: 64,
                height: 64,
              }}
              onPress={toggleModal}
            >
              <FontAwesome color={'#A661ED'} name="angle-double-up" size={30} />
            </TouchableOpacity>
          </View>

          {isModalVisible && (
            <ModalDetail
              isModalVisible={isModalVisible}
              toggleModal={toggleModal}
              props={selectedCard.beasiswa}
            />
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
              marginTop: 20,
              marginHorizontal: 40,
              alignItems: 'center',
            }}
          >
            <HeaderComponent title={'Filters'} />
            <TouchableOpacity
              onPress={clearFilters}
              style={{
                height: 35,
                width: 90,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#A460ED',
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: 'white',
                  fontFamily: 'Modernist-Bold',
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
                      Jurusan
                    </Text>
                    <DropDownPicker
                      style={{
                        zIndex: 4,
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                        elevation: 3,
                      }}
                      dropDownContainerStyle={{
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                      }}
                      searchContainerStyle={{
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                      }}
                      searchTextInputStyle={{
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                      }}
                      placeholder="Pilih Jurusan"
                      placeholderStyle={{
                        color: 'grey',
                        fontFamily: 'Modernist-Bold',
                      }}
                      textStyle={{
                        fontFamily: 'Modernist-Regular',
                      }}
                      searchable={true}
                      searchPlaceholder="Cari jurusan anda"
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
                      Jenjang
                    </Text>
                    <DropDownPicker
                      style={{
                        zIndex: 2,
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                        elevation: 3,
                      }}
                      dropDownContainerStyle={{
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                      }}
                      placeholder="Pilih Jenjang"
                      placeholderStyle={{
                        color: 'grey',
                        fontFamily: 'Modernist-Bold',
                      }}
                      textStyle={{
                        fontFamily: 'Modernist-Regular',
                      }}
                      dropDownDirection="TOP"
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
                      Indeks Prestasi Kumulatif
                    </Text>
                    <Text
                      style={{ fontSize: 15, fontFamily: 'Modernist-Regular' }}
                    >
                      {userVector.ipk}
                    </Text>
                  </View>
                  <Slider
                    value={userVector.ipk}
                    minimumValue={0}
                    maximumValue={4}
                    step={0.01}
                    thumbTintColor="#A460ED"
                    thumbStyle={{
                      width: 35,
                      height: 35,
                      borderRadius: 20,
                    }}
                    minimumTrackTintColor="#A460ED"
                    maximumTrackTintColor="#E8E6EA"
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
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
                      Semester
                    </Text>
                    <Text
                      style={{ fontSize: 15, fontFamily: 'Modernist-Regular' }}
                    >
                      {userVector.semester}
                    </Text>
                  </View>
                  <Slider
                    value={userVector.semester}
                    minimumValue={0}
                    maximumValue={14}
                    step={1}
                    thumbTintColor="#A460ED"
                    thumbStyle={{ width: 35, height: 35, borderRadius: 20 }}
                    minimumTrackTintColor="#A460ED"
                    maximumTrackTintColor="#E8E6EA"
                    onValueChange={(value) => {
                      setUserVector((prevUserVector) => ({
                        ...prevUserVector,
                        semester: value,
                      }))
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontFamily: 'Modernist-Bold',
                      }}
                    >
                      Range Uang Saku
                    </Text>
                    <DropDownPicker
                      style={{
                        zIndex: 1,
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                        elevation: 3,
                      }}
                      dropDownContainerStyle={{
                        borderColor: '#E8E6EA',
                        borderWidth: 1,
                        borderRadius: 20,
                      }}
                      placeholder="Pilih range uang saku"
                      placeholderStyle={{
                        color: 'grey',
                        fontFamily: 'Modernist-Bold',
                      }}
                      textStyle={{
                        fontFamily: 'Modernist-Regular',
                      }}
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

                  <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                  >
                    <TouchableOpacity
                      style={{
                        paddingVertical: 7,
                        paddingHorizontal: 72,
                        borderRadius: 4,
                        elevation: 3,
                        backgroundColor: '#A460ED',
                        borderRadius: 20,
                        width: 315,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 135,
                      }}
                      onPress={handleFindMatchingBeasiswa}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          letterSpacing: 0.25,
                          color: 'white',
                          fontFamily: 'Modernist-Bold',
                        }}
                      >
                        Konfirmasi
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

export default FormMatching
