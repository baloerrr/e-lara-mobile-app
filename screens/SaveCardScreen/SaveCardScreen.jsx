import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Linking,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './SaveCardScreen.js'
import HeaderComponent from '../../components/Header/HeaderComponent.jsx'
import { firebase } from '../../firebase.js'
import useCustomFonts from '../../hooks/useCustomFonts.js'
import ModalDetail from '../../components/Modal/ModalDetail.jsx'
import { FontAwesome } from '@expo/vector-icons'
import { Alert } from 'react-native'

const SaveCardScreen = () => {
  const [savedBeasiswa, setSavedBeasiswa] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const numColumns = 2
  const [selectCard, setSelectedCard] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const fontsLoaded = useCustomFonts()

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

  const deleteData = async (item) => {
    try {
      const currentUser = firebase.auth().currentUser.uid
      await firebase
        .firestore()
        .collection('savedBeasiswa')
        .doc(item.id)
        .delete()
      Alert.alert('Succes', 'Data berhasil dihapus')
      setSavedBeasiswa((prevSavedBeasiswa) =>
        prevSavedBeasiswa.filter((beasiswa) => beasiswa.id !== item.id),
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  const onRefresh = () => {
    setRefreshing(true)
    fetchData()
    setRefreshing(false)
  }

  const toggleModal = (item) => {
    setSelectedCard(item)
    setIsModalVisible(!isModalVisible)
  }

  const handleOpenBrowser = async () => {
    const url =
      'https://bicara131.bi.go.id/knowledgebase/article/KA-01126/en-us'
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      console.log('Cannot open URL')
    }
  }

  if (!fontsLoaded) {
    return null
  }

  const Card = ({ item, index }) => {
    const isLastItem = index === savedBeasiswa.length - 1

    const onPressCard = () => {
      toggleModal(item)
    }
    return (
      <>
        <TouchableOpacity
          onPress={onPressCard}
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
          </View>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent title="Matches" />
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.textComponent}>
          <View>
            <Text style={styles.textStyle}>
              halo beaswan!! {'\n'} Ini adalah beasiswa yang anda sukai
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

        {selectCard && (
          <ModalDetail
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
            props={selectCard}
            handleOpenBrowser={handleOpenBrowser}
            FontAwesome={FontAwesome}
            onDelete={deleteData}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default SaveCardScreen
