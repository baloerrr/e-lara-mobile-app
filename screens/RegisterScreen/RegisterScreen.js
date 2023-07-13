import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },

  registerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    marginTop: 15,
  },

  registerText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
    paddingTop: 40,
  },

  titleContainer: {},

  formContainer: {
    flexDirection: 'column',
    gap: 25,
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
  },
  formControl: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-around',
  },

  label: {
    textAlign: 'left',
  },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 10,
    width: 320,
    height: 60,
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
    paddingTop: 3,
    letterSpacing: 0.25,
    color: 'white',
  },

  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
    marginTop: -10,
  },

  loginText: {
    fontSize: 15,
  },

  textLinkLogin: {
    color: 'blue',
    fontSize: 15,
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
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: '#111',
  },
  textSubHeader: {
    fontSize: 25,
    color: '#111',
  },
  inputBtn: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 10,
    width: 320,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#080516',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 35,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
