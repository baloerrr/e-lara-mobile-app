import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const FundingOptions = ({ selectedOption, onOptionChange }) => {
  const handleOptionPress = (option) => {
    onOptionChange(option)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'fully funded' && styles.selectedOptionButton,
        ]}
        onPress={() => handleOptionPress('fully funded')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === 'fully funded' && styles.selectedOptionText,
          ]}
        >
          Fully Funded
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton2,
          selectedOption === 'partial funded' && styles.selectedOptionButton,
        ]}
        onPress={() => handleOptionPress('partial funded')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === 'partial funded' && styles.selectedOptionText,
          ]}
        >
          Partial Funded
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#B7BAC3',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionButton: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderBottomStartRadius: 15,
  },
  optionButton2: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  selectedOptionButton: {
    backgroundColor: '#3F4BF2',
  },
  optionText: {
    fontSize: 18,
    color: '#3F4BF2',
    fontWeight: '700',
  },
  selectedOptionText: {
    color: 'white',
  },
})

export default FundingOptions
