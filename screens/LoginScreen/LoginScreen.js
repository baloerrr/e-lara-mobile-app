import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  headerContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 25,
  },

  title: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Modernist-Bold',
    marginTop: 30,
    lineHeight: 50,
    letterSpacing: 1,
    textAlign: 'center'
  },

  subtitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Modernist-Regular',
    textAlign: 'center'
  },

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  title2: {
    color: '#A460ED',
    fontSize: 30,
    paddingRight: 10,
    fontFamily: 'Modernist-Bold',
    marginBottom: 20,
    letterSpacing: 1,
  },

  formGroup: {
    marginBottom: 25,
  },

  label: {
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Modernist-regular',
  },

  icon: {
    position: 'absolute',
    zIndex: 2,
    marginHorizontal: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#f8faf9',
    borderRadius: 20,
    width: 320,
    height: 55,
    fontSize: 15,
    paddingLeft: 50,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  buttonPink: {
    width: 320,
    height: 50,
    elevation: 3,
    backgroundColor: '#A661ED',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonPink: {
  fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Modernist-Bold',
  },

  registerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 5,
  },

  registerText: {
    fontSize: 15,
    fontFamily: 'Modernist-Regular',
  },

  textLinkRegister: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Modernist-Regular',
  },
})

