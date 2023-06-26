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

    headerContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        padding: 20
    },

    imageContainer: {
        position: 'relative'
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
        fontWeight: '500',
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
        paddingHorizontal: 10,
        backgroundColor: '#f8faf9',
        borderRadius: 10,
        width: 320,
        height: 55,
        fontSize: 15
    },

    buttonBlack: {
        paddingVertical: 7,
        width: 320,
        height: 55,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#000322',
        borderRadius: 10,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center'
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
        gap: 3,
    },

    registerText: {
        fontSize: 15
    },

    textLinkRegister: {
        color: 'blue',
        fontSize: 15
    }
})