import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

const Combustivel = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularVantagem = () => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);

    if (!isNaN(alcool) && !isNaN(gasolina)) {
      const proporcao = alcool / gasolina;

      if (proporcao < 0.7) {
        setResultado('Abasteça com Álcool!');
      } else {
        setResultado('Abasteça com Gasolina!');
      }
    } else {
      Alert.alert("Erro", "Por favor, insira valores válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço do Álcool:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
        placeholder="Digite o preço do álcool"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
        placeholder="Digite o preço da gasolina"
        placeholderTextColor="#999"
      />
      
      <TouchableOpacity style={styles.button} onPress={calcularVantagem}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      
      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
};

export default Combustivel;