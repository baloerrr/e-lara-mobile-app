import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 30,
    backgroundColor: 'white',
  },

  image: {
    width: 332,
    height: 332,
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 40,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 30,
    color: 'black',
    lineHeight: 36,
    paddingTop:8,
    fontFamily: 'Modernist-Bold'
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 400,
    color: 'black',
    letterSpacing: 1,
    lineHeight: 22,
    marginTop: 10,
    fontFamily: 'Modernist-Bold'

  },

  textBlue: {
    color: '#6E77EE',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold'
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },

  buttonPink: {
    width: 295,
    height: 50,
    elevation: 3,
    backgroundColor: '#A460ED',
    borderRadius: 20,
  },

  buttonTransparent: {
    backgroundColor: '#E4E4E4',
    opacity: 0.5,
    borderRadius: 20,
    borderColor: '#E4E4E4',
    elevation: 1,
  },

  textButtonPink: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold'
  },
  textButtonTransparent: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold'
  },

  elaraContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 295,
  },
})
