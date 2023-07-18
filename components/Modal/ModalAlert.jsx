import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

const ModalAlert = (props) => {
  let imageSource

  if (props.type == 'error') {
    imageSource = require('../../assets/E-Lara/failed_icon.png')
  } else if (props.type == 'warning') {
    imageSource = require('../../assets/E-Lara/warning_icon.png')
  } else if (props.type == 'success') {
    imageSource = require('../../assets/E-Lara/success_icon.png')
  }

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.alertBox}>
          {imageSource && <Image source={imageSource} style={styles.image} />}
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.message}>{props.message}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={props.onRequestClose}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 255,
    height: 170,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Modernist-Bold',
    color: '#A460ED',
  },
  message: {
    fontSize: 15,
    color: '#A460ED',
    fontFamily: 'Modernist-Regular',
  },
  button: {
    backgroundColor: '#F07DEA',
    borderRadius: 20,
    width: 100,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 58,
    height: 58,
  },
})

export default ModalAlert
