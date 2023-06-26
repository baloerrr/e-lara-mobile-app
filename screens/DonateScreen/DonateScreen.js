import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
    }
})

