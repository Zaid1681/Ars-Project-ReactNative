import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const AdditionScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(`Result: ${sum}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Addition</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        onChangeText={(text) => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        onChangeText={(text) => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={handleAddition} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdditionScreen;
