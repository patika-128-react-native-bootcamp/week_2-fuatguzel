import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inner_container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginLeft: 5,
    textAlign: 'center',
    color: '#141414',
    marginBottom: 5,
  },
  input: {
    width: Dimensions.get('window').width - 20,
    height: 40,
    backgroundColor: '#ccc',
    borderColor: '#3f51b5',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    color: '#141414',
  },
  button_container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
