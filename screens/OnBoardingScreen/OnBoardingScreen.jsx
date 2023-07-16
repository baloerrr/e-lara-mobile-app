import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { useNavigation } from '@react-navigation/native'

const OnBoardingScreen = () => {
  const navigation = useNavigation()
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate('Landing')
      }}
      containerStyles={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      imageContainerStyles={{
        alignItems: 'center',
        position: 'absolute',
        bottom: 220,
      }}
      pages={[
        {
          backgroundColor: '#A661ED',
          title: 'Wujudkan impian \n pendidikan mu',
          titleStyles: {
            fontSize: 35,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 80,
          },
          image: (
            <Image
              source={require('../../assets/E-Lara/vector_onboarding.png')}
              style={{ width: 250 }}
            />
          ),
          subtitle: 'Ikuti kami untuk menemukan \n beasiswa impianmu',
          subTitleStyles: {
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
          },
        },
      ]}
    />
  )
}

export default OnBoardingScreen
