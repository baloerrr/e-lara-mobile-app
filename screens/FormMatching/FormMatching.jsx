import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

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
    <View style={styles.container}>
      <Text style={styles.label}>IPK Minimal:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={ipk}
        onChangeText={(text) => setIpk(text)}
      />

      <Text style={styles.label}>Semester:</Text>
      <TextInput
        style={styles.input}
        value={semester}
        onChangeText={(text) => setSemester(text)}
      />

      <Text style={styles.label}>Jurusan:</Text>
      <TextInput
        style={styles.input}
        value={jurusan}
        onChangeText={(text) => setJurusan(text)}
      />

      <Text style={styles.label}>Tipe Pendanaan:</Text>
      <TextInput
        style={styles.input}
        value={tipePendanaan}
        onChangeText={(text) => setTipePendanaan(text)}
      />

      <Text style={styles.label}>Jenjang Beasiswa:</Text>
      <TextInput
        style={styles.input}
        value={jenjangBeasiswa}
        onChangeText={(text) => setJenjangBeasiswa(text)}
      />

      <Text style={styles.label}>Range Uang Saku:</Text>
      <TextInput
        style={styles.input}
        value={rangeUangSaku}
        onChangeText={(text) => setRangeUangSaku(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleMatching}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default MatchingForm
