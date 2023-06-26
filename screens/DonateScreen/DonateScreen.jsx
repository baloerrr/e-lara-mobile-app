import { View, SafeAreaView, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './DonateScreen.js'
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx'
import QRCodeComponent from '../../components/QRCodeComponent/QRCodeComponent.jsx'

const DonateScreen = () => {
  const [currentAmount, setCurrentAmount] = useState(0)
  const goal = 100

  const handleDonasi = () => {
    if (currentAmount < goal) {
      setCurrentAmount(currentAmount + 10)
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            padding: 10,
            borderColor: 'black',
            borderStyle: 'solid',
            width: 380,
            borderWidth: 2,
            gap: 12,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
            }}
          >
            Donasi
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              lineHeight: 18,
              fontSize: 15.5,
            }}
          >
            Donasi adalah fitur dari aplikasi E-LARA, dan ketika donasi sudah
            mencapai target, donasi ini akandi alokasikan kepada mahasiswa yang
            kurang mampu
          </Text>
          <ProgressBar goal={goal} currentAmount={currentAmount} />
        </View>
        <View>{/* <QRCodeComponent /> */}</View>
      </View>
    </SafeAreaView>
  )
}

export default DonateScreen
