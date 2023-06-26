import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useContext,
} from 'react'
import Swiper from 'react-native-deck-swiper'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'
import { firebase } from '../../firebase'
import { AuthContext } from '../../hooks/AuthProvider'
import { useNavigation } from '@react-navigation/native'

const beasiswaData = [
  {
    id: 123,
    namaBeasiswa: 'LPDP',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia nostrum, exercitationem, deserunt praesentium fugiat dolore quas enim nesciunt voluptatum laborum! Hic labore enim aliquid, consequatur numquam illum! Cupiditate, perferendis?',
    gambar: 'https://beasiswalpdp.kemenkeu.go.id/images/logo-lpdp-min.png',
    linkBeasiswa: 'https://beasiswalpdp.kemenkeu.go.id/',
  },
  {
    id: 432,
    namaBeasiswa: 'BANK BI',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia nostrum, exercitationem, deserunt praesentium fugiat dolore quas enim nesciunt voluptatum laborum! Hic labore enim aliquid, consequatur numquam illum! Cupiditate, perferendis?',
    gambar: 'https://itk.ac.id/wp-content/uploads/2020/01/fdfsfrfrefrf.jpg',
    linkBeasiswa: 'https://beasiswalpdp.kemenkeu.go.id/',
  },
  {
    id: 234,
    namaBeasiswa: 'Dicoding',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia nostrum, exercitationem, deserunt praesentium fugiat dolore quas enim nesciunt voluptatum laborum! Hic labore enim aliquid, consequatur numquam illum! Cupiditate, perferendis?',
    gambar:
      'https://secure.gravatar.com/avatar/019341b43c34bb322f316e57312ecaef?s=500&d=blank&r=g',
    linkBeasiswa: 'https://beasiswalpdp.kemenkeu.go.id/',
  },
]

const MatchingScreen = () => {
  const [beasiswa, setBeasiswa] = useState([])
  const swipeRef = useRef(null)
  const { user } = useContext(AuthContext)

  useLayoutEffect(() => {
    // firebase
    //   .firestore()
    //   .collection('beasiswa')
    //   .doc('qp8G8yMJTFjRcsFx1ahY')
    //   .onSnapshot((snapshot) => {
    //     if (!snapshot.exists()) {
    //       useNavigation().navigate('FormMatching')
    //     }
    //   })
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}
        ></View>

        <View style={{ flex: 1 }}>
          <Swiper
            stackSize={5}
            cardIndex={0}
            verticalSwipe={false}
            animateCardOpacity
            ref={swipeRef}
            overlayLabels={{
              left: {
                title: 'NOPE',
                style: {
                  textAlign: 'right',
                  color: 'red',
                },
              },
              right: {
                title: 'Match',
                style: {
                  label: {
                    color: '#4DED30',
                  },
                },
              },
            }}
            containerStyle={{
              backgroundColor: 'transparent',
            }}
            cards={beasiswaData}
            renderCard={(card) =>
              card ? (
                <View
                  key={card.id}
                  style={{
                    backgroundColor: 'white',
                    height: 500,
                    borderRadius: 15,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: card.gambar }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      height: 350,
                      width: 300,
                      borderRadius: 15,
                      marginTop: 60,
                    }}
                    resizeMode="contain"
                  />

                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: '',
                      height: 50,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderBottomStartRadius: 15,
                      borderBottomEndRadius: 15,
                    }}
                  >
                    <View style={{}}>
                      <Text>{card.namaBeasiswa}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 500,
                    borderRadius: 15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontWeight: 'bold' }}>Tidak Ada beasiswa</Text>
                </View>
              )
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              swipeRef.current.swipeRight()
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              width: 64,
              height: 64,
              backgroundColor: 'red',
            }}
          >
            <Entypo name="cross" size={24} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              swipeRef.current.swipeLeft()
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              width: 64,
              height: 64,
              backgroundColor: 'green',
            }}
          >
            <Entypo name="heart" size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MatchingScreen
