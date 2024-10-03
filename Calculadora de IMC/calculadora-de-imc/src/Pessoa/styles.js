import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', 
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: '#00796b',
  },
  input: {
    height: 50,
    borderColor: '#00796b',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  button: {
    backgroundColor: '#00796b',
    color: '#ffffff', 
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#00796b', 
  },
});

export default styles;
