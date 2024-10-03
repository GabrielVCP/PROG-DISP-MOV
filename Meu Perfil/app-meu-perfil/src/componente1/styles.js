import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    padding: 15,
    backgroundColor: '#303030'
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    color:'#cbcbcb'
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color:'#cbcbcb'
  },
  image: {
    width: 225,
    height: 225,
    marginTop:10,
    marginBottom: 25,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#ffffff'
  }
});


export {styles}