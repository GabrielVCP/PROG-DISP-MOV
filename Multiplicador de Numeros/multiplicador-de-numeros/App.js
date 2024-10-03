import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import InputComponent from './src/components/InputComponent';
import MultiplyButton from './src/components/MultiplyButton';
import ResultDisplay from './src/components/ResultDisplay';

const App = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);

    const handleMultiply = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        if (!isNaN(num1) && !isNaN(num2)) {
            setResult(num1 * num2);
        } else {
            alert('Please enter valid numbers');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputComponent
                    value={number1}
                    onChangeText={setNumber1}
                    placeholder="Enter first number"
                />
                <InputComponent
                    value={number2}
                    onChangeText={setNumber2}
                    placeholder="Enter second number"
                />
            </View>
            <MultiplyButton onPress={handleMultiply} />
            {result !== null && <ResultDisplay result={result} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
});

export default App;
