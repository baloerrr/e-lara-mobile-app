import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 30
  },

  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:50
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop:20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: 'Modernist-Bold'
  },
  textBlue: {
    color: '#6E77EE',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    paddingTop:40
  },

  buttonBlue: {
    width: 295,
    height: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#6E77EE',
    borderRadius: 15,
  },

  buttonTransparent: {
    backgroundColor: '#E4E4E4',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#6E77EE',
  },

  textButtonBlue: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
  textButtonTransparent: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#6E77EE',
    textAlign: 'center',
  },

  elaraContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 295,
  },

  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:70
  },

  lineHorizontal: {
    height: 1,
    width: 200,
    marginHorizontal: 30,
    backgroundColor: 'grey',
  },

  separatorText: {
    width: 50,
    textAlign: 'center',
    fontSize: 14
  },

  socialButtonContainer: {
    flexDirection: 'row',
    gap: 28,
    paddingTop:20
  },

  socialButton: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth:1,
    borderColor: '#6E77EE'
  },

  socialImage: {
    height: 32,
    width: 32,
  },
})
