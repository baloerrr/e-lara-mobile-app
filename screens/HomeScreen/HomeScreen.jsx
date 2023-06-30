import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/AuthProvider'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../../components/Header/HeaderComponent'
import { SafeAreaView } from 'react-native'

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
  {
    id: 321,
    namaBeasiswa: 'Dicoding',
    deskripsi:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia nostrum, exercitationem, deserunt praesentium fugiat dolore quas enim nesciunt voluptatum laborum! Hic labore enim aliquid, consequatur numquam illum! Cupiditate, perferendis?',
    gambar:
      'https://secure.gravatar.com/avatar/019341b43c34bb322f316e57312ecaef?s=500&d=blank&r=g',
    linkBeasiswa: 'https://beasiswalpdp.kemenkeu.go.id/',
  },
]

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const HomeScreen = () => {
  const { logout } = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View
        style={{
          width: width,
          height: height,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <HeaderComponent />
        </View>
        <FlatList
          data={beasiswaData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity style={styles.cardContainer}>
                  <Image
                    source={{ uri: item.gambar }}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.namaBeasiswa}</Text>
                    <Text style={styles.cardDescription}>{item.deskripsi}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 180,
    marginVertical: 10,
    paddingHorizontal: 20, // Tambahkan jarak kiri dan kanan di sini
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 25,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'justify',
  },
})
