import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Coal = () => {
  const [Air, setAir] = useState('');
  const [Coal, setCoal] = useState('');
  const [AirtoCoal, setAirtoCoal] = useState('');

  const [EnergyConsumption, setEnergyConsumption] = useState('');
  const [Coalflow, setCoalflow] = useState('');
  const [specific, setspecific] = useState('');



  const [activeSection, setActiveSection] = useState(null);

  const CalculateAirtoCoal = () => {
    const AtC = Air / Coal ;
    setAirtoCoal(AtC.toFixed(2));
  };

  const calculatespecific = () => {
    const spe = EnergyConsumption /Coalflow;
    setspecific(spe.toFixed(2));
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const isSectionActive = (section) => {
    return activeSection === section;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.section} onPress={() => toggleSection('section1')}>
        <Text style={styles.sectionTitle}>Section 1: Air to Coal</Text>
        {isSectionActive('section1') && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Air flow"
              onChangeText={(value) => setAir(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Coal"
              onChangeText={(value) => setCoal(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={CalculateAirtoCoal} />
            <Text style={styles.result}>Air to Coal: {AirtoCoal}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => toggleSection('section2')}>
        <Text style={styles.sectionTitle}>Section 2: Specific</Text>
        {isSectionActive('section2') && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Electricity Consumption"
              onChangeText={(value) => setEnergyConsumption(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Coal flow"
              onChangeText={(value) => setCoalflow(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculatespecific} />
            <Text style={styles.result}>specific: {specific}</Text>
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#e3e3e3',
  },
  sectionContent: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  result: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 8,
  },
});

export default Coal;
