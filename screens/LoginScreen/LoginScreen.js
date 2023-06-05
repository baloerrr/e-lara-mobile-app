import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    spanTitle: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 11.7,
    },
    textOrange: {
        color: 'orange',
    },

    formContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        gap: 15
    },

    input: {
        paddingVertical: 7,
        paddingHorizontal: 70,
        backgroundColor: '#f1f5f9',
        borderRadius: 10,
        width: '100%',
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

    registerLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3
    },

    textLink: {
        color: 'blue'
    }
})