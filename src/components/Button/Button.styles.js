import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#3f51b5',
    borderRadius: 5,
    width: Dimensions.get('window').width / 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    color: '#3f51b5'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
