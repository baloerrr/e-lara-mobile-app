import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 20,
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  textComponent: {
    width: '85%',
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 30
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: 'Modernist-Regular',
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#000',

    elevation: 7,
    marginTop: 20,
  },
  image: {
    width: 148.5,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    height: 45,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Modernist-Bold',
    color: 'grey'
  },

  flatListContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#F07DEA',
    borderRadius: 15,
    width: '100%',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Modernist-Bold',
  },
})
