import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const SavedCard = ({ item, index, onPressCard, onDelete }) => {
  const [savedBeasiswa, setSavedBeasiswa] = useState([])
  const isLastItem = index === savedBeasiswa.length - 1
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDelete = () => {
    setIsModalVisible(true)
  }

  const handleConfirm = () => {
    setIsModalVisible(false)
    onDelete(item)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 20,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  textComponent: {
    width: '85%',
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: 'Modernist-Regular',
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#000',

    elevation: 7,
    marginTop: 20,
  },
  image: {
    width: 148.5,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    height: 45,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Modernist-Bold',
    color: 'grey',
  },

  flatListContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
})

export default SavedCard
