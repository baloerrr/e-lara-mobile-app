import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../../components/Header/HeaderComponent'

const MatchingForm = () => {
  const [ipk, setIpk] = useState('')
  const [semester, setSemester] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [tipePendanaan, setTipePendanaan] = useState('')
  const [jenjangBeasiswa, setJenjangBeasiswa] = useState('')
  const [rangeUangSaku, setRangeUangSaku] = useState('')

  const navigation = useNavigation()

  const handleMatching = () => {
    // Lakukan proses matching berdasarkan input pengguna
    // const userInput = {
    //   ipk: parseFloat(ipk),
    //   semester,
    //   jurusan,
    //   tipePendanaan,
    //   jenjangBeasiswa,
    //   rangeUangSaku,
    // }

    // Panggil fungsi matchingProcess(input) untuk melakukan pencocokan
    navigation.navigate('Matching')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <HeaderComponent />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 25,
            backgroundColor: 'white',
            padding: 10,
            marginHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 15,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
              }}
            >
              Temukan <Text style={{ color: 'orange' }}>Beasiswa</Text>
              {'\n'} Impian
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              gap: 10,
              paddingHorizontal: 15,
              marginTop: 30,
            }}
          >
            <View>
              <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                value={ipk}
                onChangeText={(text) => setIpk(text)}
                placeholder="Masukkan IPK"
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={semester}
                onChangeText={(text) => setSemester(text)}
                placeholder="Masukkan Semester"
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={jurusan}
                onChangeText={(text) => setJurusan(text)}
                placeholder="Masukkan Jurusan"
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={tipePendanaan}
                onChangeText={(text) => setTipePendanaan(text)}
                placeholder="Masukkan Tipe Pendanaan"
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={jenjangBeasiswa}
                onChangeText={(text) => setJenjangBeasiswa(text)}
                placeholder="Masukkan Jenjang"
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                value={rangeUangSaku}
                onChangeText={(text) => setRangeUangSaku(text)}
                placeholder="Masukkan Range Uang Saku"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity style={styles.button} onPress={handleMatching}>
                <Text style={styles.buttonText}>Matching</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: 170,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default MatchingForm
