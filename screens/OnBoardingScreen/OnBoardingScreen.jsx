import { Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

const OnBoardingScreen = () => {
  const done = ({ ...props }) => (
    <FontAwesome5
      name="arrow-circle-right"
      size={32}
      color="#A460ED"
      style={{ marginRight: 10 }}
      {...props}
    />
  )

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
      DoneButtonComponent={done}
      bottomBarColor="white"
      pages={[
        {
          backgroundColor: 'white',
          title: 'Wujudkan impian \n pendidikan mu',
          titleStyles: {
            fontSize: 35,
            color: 'black',
            textAlign: 'center',
            marginTop: 80,
            fontFamily: 'Modernist-Bold',
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
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Modernist-Regular',
          },
        },
      ]}
    />
  )
}

export default OnBoardingScreen
