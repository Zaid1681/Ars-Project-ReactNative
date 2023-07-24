import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ThermalApp = () => {
  const [energyGenerated, setEnergyGenerated] = useState("");
  const [totalCapacity, setTotalCapacity] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [plantLoadFactor, setPlantLoadFactor] = useState("");

  const [fuelConsumption, setFuelConsumption] = useState("");
  const [gcv, setGCV] = useState("");
  const [generatedOutput, setGeneratedOutput] = useState("");
  const [grossHeatRate, setGrossHeatRate] = useState("");

  const [power, setPower] = useState("");
  const [netHeatRate, setNetHeatRate] = useState("");

  const [mass, setMass] = useState("");
  const [grossCal, setGrossCal] = useState("");
  const [overallEfficiency, setOverallEfficiency] = useState("");

  const [overall, setOverall] = useState("");

  const [totalFuel, setTotalFuel] = useState("");
  const [grossGen, setGrossGen] = useState("");
  const [specific, setSpecific] = useState("");

  const [activeSection, setActiveSection] = useState(null);

  const calculatePlantLoadFactor = () => {
    const pLF = (energyGenerated / (totalCapacity * totalHours)) * 100;
    setPlantLoadFactor(pLF.toFixed(2));
  };

  const calculateGrossHeatRate = () => {
    const gHR = (fuelConsumption * gcv) / generatedOutput;
    setGrossHeatRate(gHR.toFixed(2));
  };

  const calculateNetHeatRate = () => {
    const nHR = grossHeatRate / (1 - power / 100);
    setNetHeatRate(nHR.toFixed(2));
  };

  const calculateOverallEfficiency = () => {
    const oEff = (generatedOutput / (mass * grossCal)) * 100;
    setOverallEfficiency(oEff.toFixed(2));
  };

  const calculateOverall = () => {
    const ovr = (860 / grossHeatRate) * 100;
    setOverall(ovr.toFixed(2));
  };

  const calculateSpecific = () => {
    const spc = totalFuel / grossGen;
    setSpecific(spc.toFixed(2));
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const isSectionActive = (section) => {
    return activeSection === section;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section1")}
      >
        <Text style={styles.sectionTitle}>Section 1: Plant Load Factor</Text>
        {isSectionActive("section1") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Energy Generated"
              onChangeText={(value) => setEnergyGenerated(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Total Capacity"
              onChangeText={(value) => setTotalCapacity(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Total Hours"
              onChangeText={(value) => setTotalHours(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculatePlantLoadFactor} />
            <Text style={styles.result}>
              Plant Load Factor: {plantLoadFactor}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>Section 2: Gross Heat Rate</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Fuel Consumption"
              onChangeText={(value) => setFuelConsumption(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="GCV"
              onChangeText={(value) => setGCV(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Generated Output"
              onChangeText={(value) => setGeneratedOutput(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateGrossHeatRate} />
            <Text style={styles.result}>Gross Heat Rate: {grossHeatRate}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section3")}
      >
        <Text style={styles.sectionTitle}>Section 3: Net Heat Rate</Text>
        {isSectionActive("section3") && (
          <View style={styles.sectionContent}>
            <Text style={styles.info}>Gross Heat Rate: {grossHeatRate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Power"
              onChangeText={(value) => setPower(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateNetHeatRate} />
            <Text style={styles.result}>Net Heat Rate: {netHeatRate}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section4")}
      >
        <Text style={styles.sectionTitle}>Section 4: Overall Efficiency</Text>
        {isSectionActive("section4") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Generated Output"
              onChangeText={(value) => setGeneratedOutput(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Mass"
              onChangeText={(value) => setMass(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Gross Cal"
              onChangeText={(value) => setGrossCal(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateOverallEfficiency} />
            <Text style={styles.result}>
              Overall Efficiency: {overallEfficiency}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section5")}
      >
        <Text style={styles.sectionTitle}>Section 5: Overall</Text>
        {isSectionActive("section5") && (
          <View style={styles.sectionContent}>
            <Text style={styles.info}>Gross Heat Rate: {grossHeatRate}</Text>
            <Button title="Calculate" onPress={calculateOverall} />
            <Text style={styles.result}>Overall: {overall}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section6")}
      >
        <Text style={styles.sectionTitle}>Section 6: Specific</Text>
        {isSectionActive("section6") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Total Fuel"
              onChangeText={(value) => setTotalFuel(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Gross Gen"
              onChangeText={(value) => setGrossGen(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateSpecific} />
            <Text style={styles.result}>Specific: {specific}</Text>
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
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    padding: 12,
    backgroundColor: "#e3e3e3",
  },
  sectionContent: {
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  result: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    marginBottom: 8,
  },
});

export default ThermalApp;
