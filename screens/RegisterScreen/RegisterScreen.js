import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  scrollView: {
    flexGrow: 1, 
  },

  registerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 15,
  },

  title: {
    fontSize: 30,
    color: 'black',
    marginTop: 15,
    fontFamily: 'Modernist-Bold',
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Modernist-Regular',
    textAlign: 'center'
  },

  formContainer: {
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  formGroup: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  icon: {
    position:'absolute',
    zIndex: 2,
    marginLeft: 28,
  },

  label: {
    textAlign: 'left',
  },

  googleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 20,
    width: 320,
    height: 60,
    fontFamily: 'Modernist-Regular',
    paddingLeft: 60
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputPhone: {
    borderRadius: 20, 
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#f8faf9',
    height: 65,
    width: 320,
    paddingHorizontal: 10,
  },

  inputDate: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 20,
    width: 320,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 60
  },

  selectedStartDate: {
    color: 'black', 
    fontFamily: 'Modernist-Regular'
  },

  notSelectedStartDate: {
    color: 'grey', 
    fontFamily: 'Modernist-Regular'
  },

  buttonPink: {
    width: 320,
    height: 55,
    elevation: 3,
    backgroundColor: '#A460ED',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWhite: {
    width: 320,
    height: 55,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonPink: {
    fontSize: 20,
    lineHeight: 21,
    paddingTop: 3,
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Modernist-Bold'
  },

  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
    marginTop: -5
  },

  loginText: {
    fontSize: 15,
    fontFamily: 'Modernist-Regular',
    color: '#4F4559'
  },

  textLinkLogin: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Modernist-Regular',
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
