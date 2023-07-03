import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, TextInput, ScrollView } from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import { firebase } from '../../firebase'
import { useNavigation } from '@react-navigation/native'

const BeasiswaScreen = () => {
  const [namaBeasiswa, setNamaBeasiswa] = useState('')
  const [ipkMin, setIpkMin] = useState('')

  const navigation = useNavigation()

  const [openJurusan, setOpenJurusan] = useState(false)
  const [valueJurusan, setValueJurusan] = useState(null)
  const [jurusanItem, setJurusanItem] = useState([
    { label: 'Teknik Informatika', value: 'teknik informatika' },
    { label: 'Ilmu Komputer', value: 'ilmu komputer' },
    { label: 'Teknik Elektro', value: 'teknik elektro' },
    { label: 'Teknologi Informasi', value: 'teknologi informasi' },
    { label: 'Teknik Telekomunikasi', value: 'teknik telekomunikasi' },
    { label: 'Semua Jurusan', value: 'semua jurusan' },
    { label: 'Semua ', value: 'semua ' },
  ])

  const [openJenjang, setOpenJenjang] = useState(false)
  const [valueJenjang, setValueJenjang] = useState(null)
  const [jenjangItem, setJenjangItem] = useState([
    { label: 'S1', value: 's1' },
    { label: 'S2', value: 's2' },
  ])

  const [openSemester, setOpenSemester] = useState(false)
  const [valueSemester, setValueSemester] = useState(null)
  const [semesterItem, setSemesterItem] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ])

  const [openTipePendanaan, setOpenTipePendanaan] = useState(false)
  const [valueTipePendanaan, setValueTipePendanaan] = useState(null)
  const [tipePendanaanItem, setTipePendanaanItem] = useState([
    { label: 'Fully Funded', value: 'fully funded' },
    { label: 'Partial Funded', value: 'partial funded' },
  ])

  const [openRangeUangSaku, setOpenRangeUangSaku] = useState(false)
  const [valueRangeUangSaku, setValueRangeUangSaku] = useState(null)
  const [rangeUangSakuItem, setRangeUangSakuItem] = useState([
    { label: '1000000-2000000', value: '1000000-2000000' },
    { label: '4000000-5000000', value: '4000000-5000000' },
  ])

  useEffect(() => {
    console.log(valueJenjang)
  }, [valueJenjang])

  const handleAddBeasiswa = async () => {
    try {
      await firebase
        .firestore()
        .collection('beasiswa')
        .add({
          nama: namaBeasiswa,
          ipkMin: ipkMin,
          jurusan: valueJurusan,
          semester: valueSemester,
          jenjang: valueJenjang,
          tipePendanaan: valueTipePendanaan,
          rangeUangSaku: valueRangeUangSaku,
        })
        .then(() => {
          Alert.alert('Sukses', 'Berhasil Daftar')
          setNamaBeasiswa('')
          setIpkMin('')
          setValueJurusan(null)
          setValueSemester(null)
          setValueJenjang(null)
          setValueTipePendanaan(null)
          setValueRangeUangSaku(null)
        })
      console.log('Beasiswa added successfully!')
    } catch (error) {
      console.error('Error adding beasiswa:', error)
    }
  }

  useEffect(() => {}, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'column', gap: 10, margin: 10 }}>
        <Text>Nama</Text>
        <TextInput
          onChangeText={(namaBeasiswa) => setNamaBeasiswa(namaBeasiswa)}
          placeholder="Nama Beasiswa"
          value={namaBeasiswa}
        />
        <Text>IPK</Text>
        <TextInput
          onChangeText={(ipkMin) => setIpkMin(ipkMin)}
          placeholder="Minimal IPK"
          value={ipkMin}
          keyboardType="numeric"
        />
        <Text>Jurusan</Text>
        <DropdownPicker
          containerStyle={{ zIndex: 5 }}
          placeholder="Pilih Jurusan"
          listMode="SCROLLVIEW"
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
          closeAfterSelecting={true}
          maxHeight={200}
          multiple={true}
          max={7}
          min={1}
          items={jurusanItem}
          value={valueJurusan}
          open={openJurusan}
          setOpen={setOpenJurusan}
          setValue={setValueJurusan}
          setItems={setJurusanItem}
        />
        <Text>Semester</Text>
        <DropdownPicker
          containerStyle={{ zIndex: 4 }}
          placeholder="Pilih Minimal Semester"
          items={semesterItem}
          value={valueSemester}
          open={openSemester}
          setOpen={setOpenSemester}
          setValue={setValueSemester}
          setItems={setSemesterItem}
        />
        <Text>Jenjang</Text>
        <DropdownPicker
          containerStyle={{ zIndex: 3 }}
          multiple={true}
          max={7}
          min={1}
          placeholder="Pilih Jenjang"
          items={jenjangItem}
          value={valueJenjang}
          open={openJenjang}
          setOpen={setOpenJenjang}
          setValue={setValueJenjang}
          setItems={setJenjangItem}
        />
        <Text>Tipe Pendanaan</Text>
        <DropdownPicker
          containerStyle={{ zIndex: 2 }}
          placeholder="Pilih Tipe Pendanaan"
          items={tipePendanaanItem}
          value={valueTipePendanaan}
          open={openTipePendanaan}
          setOpen={setOpenTipePendanaan}
          setValue={setValueTipePendanaan}
          setItems={setTipePendanaanItem}
        />
        <Text>Range Uang Saku</Text>
        <DropdownPicker
          containerStyle={{ zIndex: 1 }}
          placeholder="Pilih Range Uang Saku"
          items={rangeUangSakuItem}
          value={valueRangeUangSaku}
          open={openRangeUangSaku}
          setOpen={setOpenRangeUangSaku}
          setValue={setValueRangeUangSaku}
          setItems={setRangeUangSakuItem}
        />

        <Button title="Submit" onPress={handleAddBeasiswa} />
        <Button
          title="percobaan"
          onPress={() => {
            navigation.navigate('Percobaan')
          }}
        />
      </View>
    </View>
  )
}

export default BeasiswaScreen
