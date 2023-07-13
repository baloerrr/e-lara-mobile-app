import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },

  imageContainer: {
    width: 390,
    height: 235,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textMasuk: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    color: 'white',
    fontSize: 40,
    paddingRight: 10,
    fontWeight: 'bold',
  },

  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    gap: 15,
  },

  inputContainer: {
    flexDirection: 'column',
    gap: 20,
    paddingTop: 70,
  },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 10,
    width: 320,
    height: 55,
    fontSize: 15,
  },

  buttonContainer: {
    paddingTop: 130,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  buttonBlue: {
    width: 320,
    height: 55,
    elevation: 3,
    backgroundColor: '#6E77EE',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonBlue: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  registerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
    paddingTop: 100,
  },

  registerText: {
    fontSize: 15,
  },

  textLinkRegister: {
    color: 'blue',
    fontSize: 15,
  },
})
