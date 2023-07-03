import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Pump = () => {
  const [Q, setQ] = useState('');
  const [Hd, setHd] = useState('');
  const [Pm, setPm] = useState('');
  const [Ph, setPh] = useState('');
  const [MotorEff, setMotorEff] = useState('');
  const [Ps, setPs] = useState('');
  const [PumpEfficiency, setPumpEfficiency] = useState('');

  const calculateValues = () => {
    const phValue = (parseFloat(Q) * parseFloat(Hd) * 1000 * 9.81) / 1000;
    const motorEffValue = (phValue / parseFloat(Pm)) * 100;
    const psValue = parseFloat(Pm) * 0.88;
    const pumpEfficiencyValue = (phValue / psValue) * 100;

    setPh(phValue.toFixed(2));
    setMotorEff(motorEffValue.toFixed(2));
    setPs(psValue.toFixed(2));
    setPumpEfficiency(pumpEfficiencyValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pump Efficiency Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Measured Q:</Text>
        <TextInput
          value={Q}
          onChangeText={setQ}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Measured Hd:</Text>
        <TextInput
          value={Hd}
          onChangeText={setHd}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Measured Power Pm:</Text>
        <TextInput
          value={Pm}
          onChangeText={setPm}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateValues}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.table}>
        <Text style={styles.tableHeader}>Ph</Text>
        <Text style={styles.tableHeader}>MotorEff</Text>
        <Text style={styles.tableHeader}>Ps</Text>
        <Text style={styles.tableHeader}>Pump Efficiency</Text>
      </View>

      <View style={styles.table}>
        <Text style={styles.tableValue}>{Ph}</Text>
        <Text style={styles.tableValue}>{MotorEff}</Text>
        <Text style={styles.tableValue}>{Ps}</Text>
        <Text style={styles.tableValue}>{PumpEfficiency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  table: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
  },
  tableValue: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Pump;
