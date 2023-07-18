import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 30,
    backgroundColor: '#A460ED',
  },

  imageContainer: {},

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
    color: 'white',
    lineHeight: 36,
    paddingTop:8,
    fontFamily: 'Modernist-Bold'
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 400,
    color: 'white',
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
    backgroundColor: '#F07DEA',
    borderRadius: 20,
  },

  buttonTransparent: {
    backgroundColor: '#E4E4E4',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6E77EE',
    elevation: 3,
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
    color: '#6E77EE',
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
