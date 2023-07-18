import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import useCustomFonts from '../../hooks/useCustomFonts'

const FundingOptions = ({ selectedOption, onOptionChange }) => {
  const handleOptionPress = (option) => {
    onOptionChange(option)
  }

  const fontsLoaded = useCustomFonts()

  if (!fontsLoaded) {
    return null
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
    borderColor: 'white',
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
    elevation: 3,
  },
  optionButton2: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 3,
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  selectedOptionButton: {
    backgroundColor: '#A460ED',
  },
  optionText: {
    fontSize: 18,
    color: '#A460ED',
    fontFamily: 'Modernist-Bold',
  },
  selectedOptionText: {
    color: 'white',
  },
  separator: {
    backgroundColor: '#EEEEEE',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  separatorText: {
    fontSize: 30,
  },
})

export default FundingOptions
