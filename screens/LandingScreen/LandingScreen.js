import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    imageContainer: {
      position: 'relative'
    },

    titleContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 30
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
    buttonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 15,
      marginTop: 20,
    },
  
    buttonBlack: {
      paddingVertical: 6,
      paddingHorizontal: 19,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      borderRadius: 10,
    },
  
    buttonBlue: {
      paddingVertical: 6,
      paddingHorizontal: 19,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#1976d3',
      borderRadius: 10,
    },
  
    buttonGray: {
      paddingVertical: 6,
      paddingHorizontal: 19,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#d9d9d9',
      borderRadius: 10,
    },
  
    textButtonBlack: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    textButtonBlue: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    textButtonGray: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },

    elaraContainer: {
      flexDirection: 'row',
      gap: 10,
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },

    facebookContainer: {
      flexDirection: 'row',
      gap: 10,
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonBlackImage: {
      width: 26,
      height: 26
    },

    facebookImage: {
      height: 25,
      width: 25,
    },

    googleContainer: {
      flexDirection: 'row', 
      gap: 10, 
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },

    googleImage: {
      height: 25,
      width: 25,
    },

    loginLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    }

  })
  