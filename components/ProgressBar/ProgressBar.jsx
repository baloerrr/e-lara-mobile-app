import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProgressBar = ({ goal, currentAmount }) => {
  const progress = (currentAmount / goal) * 100
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]}>
        <Text style={styles.progressText}>{`${progress.toFixed(2)}%`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 25,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000322',
  },
  progressText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
})

export default ProgressBar
