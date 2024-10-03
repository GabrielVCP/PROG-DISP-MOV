import { Text, View, StyleSheet } from 'react-native';

const ResultDisplay = ({ result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.result}>Result: {result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ResultDisplay;
