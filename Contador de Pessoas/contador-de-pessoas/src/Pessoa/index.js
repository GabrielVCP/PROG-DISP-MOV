import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
 
const Pessoa = () => {
  const [number, setNumber] = useState(0);
 
  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };
 
  const decrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar" onPress={increment} />
        <Button title="Remover" onPress={decrement} />
      </View>
    </View>
  );
};
 
export default Pessoa;