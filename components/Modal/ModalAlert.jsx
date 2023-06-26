import { View, Text, Button } from 'react-native'
import Modal from 'react-native-modal'
import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/AuthProvider'

const ModalAlert = () => {
  const { message, modalVisible, setModalVisible, setIsLoading } = useContext(
    AuthContext,
  )
  return (
    <Modal backdropOpacity={0.5} isVisible={modalVisible}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 16,
          overflow: 'hidden',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold' }}>
          Message
        </Text>
        <Text style={{ fontSize: 15, padding: 10 }}>{message}</Text>
        <Button
          title="OK"
          onPress={() => {
            setModalVisible(false)
            setIsLoading(false)
          }}
        />
      </View>
    </Modal>
  )
}

export default ModalAlert
