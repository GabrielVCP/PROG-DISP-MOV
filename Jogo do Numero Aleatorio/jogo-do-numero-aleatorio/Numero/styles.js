import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', 
    
  },
  resultText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    padding: 10,
    borderColor: '#139de8', 
    borderWidth: 2,
    borderRadius: 8, 
    textAlign: 'center', 
  },
  button: {
    backgroundColor: '#39FF14',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#d4a200', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});



