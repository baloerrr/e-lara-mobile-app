import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        marginTop: 24,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginTop: 15
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 30
    },

    registerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30
    },

    registerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 30
    },

    formContainer: {
        flexDirection: 'column',
        gap: 25,
        alignItems: 'center',
        width: '100%',
    },
    formControl: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'space-around'
    },

    label: {
        textAlign: 'left'
    },

    input: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        backgroundColor: '#f1f5f9',
        borderRadius: 10,
        height: 40,
        borderWidth: 1,
    },

    buttonBlack: {
        paddingVertical: 7,
        paddingHorizontal: 72,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#000322',
        borderRadius: 10,
    },

    textButtonBlack: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})