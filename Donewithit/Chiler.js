import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Chiler = () => {
  const [Mf, setMf] = useState('');
  const [Tin, setTin] = useState('');
  const [Tout, setTout] = useState('');
  const [W, setW] = useState('');
  const [nm, setNm] = useState('');
  const [nt, setNt] = useState('');
  const [Cp, setCp] = useState('');
  const [Qe, setQe] = useState('');
  const [TR, setTR] = useState('');
  const [Qin, setQin] = useState('');
  const [EER, setEER] = useState('');

  const calculateValues = () => {
    const refrigerationEffect = parseFloat(Mf) * 1000 * parseFloat(Cp) * (parseFloat(Tin) - parseFloat(Tout));
    const refrigerationCapacity = refrigerationEffect / 3.51;
    const estimatedCompressorPower = parseFloat(W) * (parseFloat(nm) / 100) * (parseFloat(nt) / 100);
    const energyEfficiencyRatio = refrigerationEffect / estimatedCompressorPower;

    setQe(refrigerationEffect.toFixed(2));
    setTR(refrigerationCapacity.toFixed(2));
    setQin(estimatedCompressorPower.toFixed(2));
    setEER(energyEfficiencyRatio.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Chiller Efficiency Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Chilled Water Flow Outlet (Mf):</Text>
        <TextInput
          value={Mf}
          onChangeText={setMf}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Chilled Water Temperature at Evaporator Inlet (Tin):</Text>
        <TextInput
          value={Tin}
          onChangeText={setTin}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Chilled Water Temperature at Evaporator Outlet (Tout):</Text>
        <TextInput
          value={Tout}
          onChangeText={setTout}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Power Input to Motor (W):</Text>
        <TextInput
          value={W}
          onChangeText={setW}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Motor Efficiency (%nm):</Text>
        <TextInput
          value={nm}
          onChangeText={setNm}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Drive Transmission Efficiency (%nt):</Text>
        <TextInput
          value={nt}
          onChangeText={setNt}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Specific Heat of Chiller Water (Cp):</Text>
        <TextInput
          value={Cp}
          onChangeText={setCp}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateValues}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.table}>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Refrigeration Effect (Qe)</Text>
          <Text style={styles.tableValue}>{Qe}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Refrigeration Capacity (TR)</Text>
          <Text style={styles.tableValue}>{TR}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Estimated Compressor Shaft Power (Qin)</Text>
          <Text style={styles.tableValue}>{Qin}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Energy Efficiency Ratio (EER)</Text>
          <Text style={styles.tableValue}>{EER}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
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
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  tableValue: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Chiler;
