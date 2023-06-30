import { View, SafeAreaView, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './DonateScreen.js'
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx'
import HeaderComponent from '../../components/Header/HeaderComponent.jsx'
import QRCode from 'react-native-qrcode-svg'

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
        <View>
          <HeaderComponent />
        </View>
        <View
          style={{
            padding: 10,
            width: 355,
            gap: 12,
            borderRadius: 15,
            marginTop: 20,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
            marginHorizontal: 20,
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
          {/* <Button title="ISI" onPress={handleDonasi} /> */}
        </View>
        {/* <View
          style={{
            padding: 10,
            width: 355,
            gap: 12,
            borderRadius: 15,
            marginTop: 20,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
            marginHorizontal: 20,
          }}
        >
          <QRCode value="https://images.squarespace-cdn.com/content/v1/5e1c5d714316850ed6da863a/1615287646326-6O3BQGGU4IWUQX07C3RD/Neymar.jpg?format=1500w" />
        </View> */}
      </View>
    </SafeAreaView>
  )
}

export default DonateScreen
