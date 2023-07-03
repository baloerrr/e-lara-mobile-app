import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        marginTop: 15
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 30
    },
     elaraLogo: {
        width: 55, 
        height: 55 
     },

    registerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: -100
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
        paddingHorizontal: 10,
        backgroundColor: '#f8faf9',
        borderRadius: 10,
        width: 320,
        height: 60,
    },

    buttonBlack: {
        paddingVertical: 7,
        paddingHorizontal: 72,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#000322',
        borderRadius: 10,
        width: 320,
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButtonBlack: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    loginLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
        marginTop: -10
    },

    loginText: {
        fontSize: 15
    },

    textLinkLogin: {
        color: 'blue',
        fontSize: 15
    },
    imagepreviewcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#f0cced',
        marginVertical: 8,
        borderRadius: 8,
      },
      previewText: {
        color: '#592454',
      },
      imageStyle: {
        width: '100%',
        height: '100%',
      },
})