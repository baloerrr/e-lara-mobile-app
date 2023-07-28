import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const SwiperCard = (card, index) => {
  const beasiswa = card.beasiswa

  if (!beasiswa) {
    setIsConfirmed(false)
    return
  }

  return (
    <Pressable
      key={beasiswa.id}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 420,
        position: 'relative',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
        marginTop: 80,
      }}
    >
      <Image
        style={{
          width: '100%',
          height: 420,
          position: 'absolute',
          borderRadius: 20,
          padding: 20,
          borderWidth: 7,
          borderColor: '#A460ED',
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={{ uri: beasiswa.gambar }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#A460ED',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 15,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}
        >
          {beasiswa.nama}
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 15,
            color: 'white',
          }}
        >
          {beasiswa.tipePendanaan}
        </Text>
      </View>
    </Pressable>
  )
}

export default SwiperCard
