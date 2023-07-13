import { View, SafeAreaView, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './DonateScreen.js'
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx'
import HeaderComponent from '../../components/Header/HeaderComponent.jsx'
import QRCode from 'react-native-qrcode-svg'

const DonateScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <HeaderComponent title={'Matches'} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DonateScreen
