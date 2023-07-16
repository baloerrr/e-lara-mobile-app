import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './SaveCardScreen.js'
import HeaderComponent from '../../components/Header/HeaderComponent.jsx'
import { firebase } from '../../firebase.js'

const SaveCardScreen = () => {
  const [savedBeasiswa, setSavedBeasiswa] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const numColumns = 2
  const screenWidth = Dimensions.get('window').width

  const fetchData = async () => {
    try {
      const currentUser = firebase.auth().currentUser.uid
      const snapshot = await firebase
        .firestore()
        .collection('savedBeasiswa')
        .where('userId', '==', currentUser)
        .get()
      const beasiswaData = snapshot.docs.map((doc) => doc.data())
      setSavedBeasiswa(beasiswaData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    fetchData()
    setRefreshing(false)
  }

  const Card = ({ item, index }) => {
    const isLastItem = index === savedBeasiswa.length - 1
    return (
      <TouchableOpacity
        style={[styles.cardContainer, isLastItem && { marginBottom: 25 }]}
      >
        <Image
          resizeMode={isLastItem ? 'stretch' : 'contain'}
          source={{ uri: item.gambar }}
          style={
            isLastItem
              ? {
                  width: '100%',
                  height: 210,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }
              : styles.image
          }
        />
        <View style={styles.content}>
          <Text style={styles.title}>{item.nama}</Text>
          <Text style={styles.category}>{item.tipePendanaan}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          paddingTop: 20,
        }}
      >
        <HeaderComponent title="Matches" />
      </View>
      <View
        style={{
          paddingTop: 120,
          width: '85%',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 400,
              letterSpacing: 1,
              lineHeight: 20,
            }}
          >
            Ini adalah list beasiswa yang anda sukai dan sesuai untuk anda.
          </Text>
        </View>
        <FlatList
          data={savedBeasiswa}
          renderItem={Card}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          contentContainerStyle={[
            styles.flatListContent,
            {
              flexGrow: 1,
            },
          ]}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default SaveCardScreen
