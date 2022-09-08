import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  image_container: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },
  bottom_container: {
    margin: 5,
    justifyContent: 'flex-end',
    flex: 1,
  },
  title_container: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  price_container: {
    fontweight: 'bold',
    color: 'gray',
    marginTop: 5,
    justifyContent: 'flex-end',
  },
  stok_container: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
