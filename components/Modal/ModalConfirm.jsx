import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'

const ModalConfirm = ({ visible, onConfirm, onCancel, message }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Konfirmasi</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>Tidak</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={[styles.button, styles.confirmButton]}
            >
              <Text style={styles.buttonText}>Ya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: 255,
    height: 165,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Modernist-Bold',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Modernist-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    marginRight: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
  confirmButton: {
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#F07DEA',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Modernist-Bold',
  },
})

export default ModalConfirm
