import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Condenser = () => {
  const [Tcwi, setTcwi] = useState('');
  const [Tcwo, setTcwo] = useState('');
  const [Tsat, setTsat] = useState('');
  const [coolingWaterFlow, setCoolingWaterFlow] = useState('');
  const [specificHeat, setSpecificHeat] = useState('');
  const [temperatureRise, setTemperatureRise] = useState('');
  const [condenserEffectiveness, setCondenserEffectiveness] = useState('');
  const [condenserHeatLoad, setCondenserHeatLoad] = useState('');
  const [condenserVacuum, setCondenserVacuum] = useState('');

  const calculateCondenserEffectiveness = () => {
    const actualTemperatureRise = Tcwo - Tcwi;
    const maxTemperatureRise = Tsat - Tcwi;
    const effectiveness = (actualTemperatureRise / maxTemperatureRise) * 100;
    setCondenserEffectiveness(effectiveness.toFixed(2));
  };

  const calculateCondenserHeatLoad = () => {
    const heatLoad = coolingWaterFlow * specificHeat * temperatureRise;
    setCondenserHeatLoad(heatLoad.toFixed(2));
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
        <Text style={styles.sectionTitle}>Section 1: Condenser Effectiveness</Text>
        {isSectionActive('section1') && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Cooling Water Inlet Temperature (Tcwi)"
              onChangeText={(value) => setTcwi(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Cooling Water Outlet Temperature (Tcwo)"
              onChangeText={(value) => setTcwo(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Saturation Temperature of Steam (Tsat)"
              onChangeText={(value) => setTsat(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateCondenserEffectiveness} />
            <Text style={styles.result}>Condenser Effectiveness: {condenserEffectiveness} %</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => toggleSection('section2')}>
        <Text style={styles.sectionTitle}>Section 2: Condenser Heat Load</Text>
        {isSectionActive('section2') && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Condenser Cooling Water Flow (Q)"
              onChangeText={(value) => setCoolingWaterFlow(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Specific Heat of Cooling Water (Cp)"
              onChangeText={(value) => setSpecificHeat(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Temperature Rise of Cooling Water (AT)"
              onChangeText={(value) => setTemperatureRise(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateCondenserHeatLoad} />
            <Text style={styles.result}>Condenser Heat Load: {condenserHeatLoad} kcal/hr</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => toggleSection('section3')}>
        <Text style={styles.sectionTitle}>Section 3: Condenser Vacuum</Text>
        {isSectionActive('section3') && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Atmospheric Pressure (mmHg)"
              onChangeText={(value) => setAtmosphericPressure(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Condenser Back Pressure (mmHg)"
              onChangeText={(value) => setCondenserBackPressure(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateCondenserVacuum} />
            <Text style={styles.result}>Condenser Vacuum: {condenserVacuum} mmHg</Text>
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
});

export default Condenser;
