import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import ModalConfirm from './ModalConfirm'

const ModalDetail = ({
  isModalVisible,
  toggleModal,
  FontAwesome,
  onDelete,
  props,
}) => {
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false)

  const handleConfirmVisible = () => {
    setIsModalConfirmVisible(true)
  }

  const handleConfirm = () => {
    onDelete(props)
    setTimeout(() => {
      setIsModalConfirmVisible(false)
      toggleModal()
    }, 1000)
  }

  const handleCancel = () => {
    setIsModalConfirmVisible(false)
  }

  const handleOpenBrowser = async () => {
    const url = props.url
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      console.log('Cannot open URL')
    }
  }

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={styles.modalText}>
            <Text
              style={{
                fontSize: 32,
                color: 'black',
                letterSpacing: 0.5,
                fontFamily: 'Modernist-Bold',
                width: 250,
              }}
            >
              {props.nama}
            </Text>

            {FontAwesome ? (
              <TouchableOpacity
                onPress={handleConfirmVisible}
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
              >
                <View
                  style={{
                    borderColor: '#E8E6EA',
                    borderWidth: 1,
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome size={35} name="trash-o" color="#F07DEA" />
                </View>
              </TouchableOpacity>
            ) : (
              ''
            )}

            <Text
              style={{
                fontSize: 20,
                color: 'black',
                lineHeight: 23,
                letterSpacing: 0.5,
                fontFamily: 'Modernist-Bold',
              }}
            >
              Tipe Pendanaan {'\n'}
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  textTransform: 'capitalize',
                  fontFamily: 'Modernist-Regular',
                }}
              >
                {props.tipePendanaan}
              </Text>
            </Text>

            <Text
              style={{
                textAlign: 'justify',
                fontSize: 20,
                color: 'black',
                letterSpacing: 0.5,
                fontFamily: 'Modernist-Bold',
              }}
            >
              Deskripsi {'\n'}
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: '400',
                  lineHeight: 23,
                  fontFamily: 'Modernist-Regular',
                }}
              >
                {props.deskripsi}
              </Text>
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 130,
              }}
            >
              <Image
                source={{ uri: props.gambar }}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: 250,
                  borderWidth: 2,
                  borderColor: '#EEEEEE',
                  borderRadius: 20,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 5,
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}
            >
              <TouchableOpacity
                style={styles.detailButton}
                onPress={handleOpenBrowser}
              >
                <Text style={styles.detailButtonText}>Selengkapnya</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.closeButtonText}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <ModalConfirm
        visible={isModalConfirmVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message="Anda yakin ingin menghapus?"
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
    paddingBottom: 50,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    marginTop: 20,
  },

  detailButton: {
    width: '100%',
    height: 50,
    elevation: 3,
    backgroundColor: '#A661ED',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButtonText: {
    fontSize: 16,
    color: '#A661ED',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold',
  },

  closeButton: {
    width: '100%',
    height: 50,
    elevation: 3,
    backgroundColor: '#E6E6E6',
    opacity: 0.5,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold',
  },
})

export default ModalDetail
