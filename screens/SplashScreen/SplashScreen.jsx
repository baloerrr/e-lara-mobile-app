import React, { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Entypo from '@expo/vector-icons/Entypo'
import * as Font from 'expo-font'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const SplashScreenComponent = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync()
      }
    }

    onLayoutRootView()
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Ubah dengan warna atau gambar latar belakang yang diinginkan
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SplashScreenComponent
