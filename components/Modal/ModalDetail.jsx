import {
  View,
  Text,
  Modal,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React from 'react'

const ModalDetail = ({
  isModalVisible,
  toggleModal,
  handleOpenBrowser,
  FontAwesome,
  onDelete,
  props,
}) => {
  const handleDelete = () => {
    onDelete(props)
    setTimeout(toggleModal, 1000)
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
                color: '#A460ED',
                letterSpacing: 0.5,
                fontFamily: 'Modernist-Bold',
                width: 250,
              }}
            >
              {props.nama}
            </Text>

            {FontAwesome ? (
              <TouchableOpacity
                onPress={handleDelete}
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
                color: '#A460ED',
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
                color: '#A460ED',
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
                Bank Indonesia mendorong komunitas penerima Beasiswa BI yang
                juga disebut sebagai Generasi Baru Indonesia (GenBI) sebagai
                pemimpin muda yang dapat mengakselerasi ekonomi dan keuangan
                digital bagi pertumbuhan ekonomi negeri. Hal tersebut diwujudkan
                melalui kegiatan GenBI Leadership Camp 2021 yang diselenggarakan
                secara virtual pada 20-21 November 2021.
              </Text>
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                gap: 2,
              }}
            >
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleOpenBrowser}
              >
                <Text style={styles.closeButtonText}>Selengkapnya</Text>
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
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
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
  closeButton: {
    padding: 10,
    backgroundColor: '#F07DEA',
    borderRadius: 15,
    width: '100%',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold',
  },
})

export default ModalDetail
