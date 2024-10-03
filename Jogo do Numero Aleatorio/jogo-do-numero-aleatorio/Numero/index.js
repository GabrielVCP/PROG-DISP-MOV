import React, { useState } from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import styles from './styles'; 

const Numero = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleDiscover = () => {
    const generatedNumber = Math.floor(Math.random() * 10) + 1; 
    setRandomNumber(generatedNumber);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://media.istockphoto.com/id/979200938/vector/falling-numbers-digits-beautiful-background-design-wallpaper.jpg?s=612x612&w=is&k=20&c=0jyt_zhsGfqeZzvoN16AWPxmYl8-sBqZJnt3clVveFM=' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pense em um número de 1 a 10!</Text>
        <Button title="Descobrir" onPress={handleDiscover} />
        {randomNumber !== null && (
          <Text style={styles.resultText}>O número é: {randomNumber}</Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default Numero;


