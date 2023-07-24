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

const Turbine = () => {
  const [Q1, setQ1] = useState("");
  const [H1, setH1] = useState("");
  const [h2, setH2] = useState("");
  const [Q2, setQ2] = useState("");
  const [H3, setH3] = useState("");
  const [H4, setH4] = useState("");
  const [grossGeneratorOutput, setGrossGeneratorOutput] = useState("");
  const [turbineHeatRate, setTurbineHeatRate] = useState("");

  const [boilerEfficiency, setBoilerEfficiency] = useState("");
  const [unitHeatRate, setUnitHeatRate] = useState("");

  const [turbineCycleEfficiency, setTurbineCycleEfficiency] = useState("");

  const [actualEnthalpy, setActualEnthalpy] = useState("");
  const [isentropicEnthalpy, setIsentropicEnthalpy] = useState("");
  const [turbineStageEfficiency, setTurbineStageEfficiency] = useState("");

  const [activeSection, setActiveSection] = useState(null);

  const calculateTurbineHeatRate = () => {
    const tHR = (Q1 * (H1 - h2) + Q2 * (H3 - H4)) / grossGeneratorOutput;
    setTurbineHeatRate(tHR.toFixed(2));
  };

  const calculateUnitHeatRate = () => {
    const uHR = turbineHeatRate / boilerEfficiency;
    setUnitHeatRate(uHR.toFixed(2));
  };

  const calculateTurbineCycleEfficiency = () => {
    const tCE = (860 / turbineHeatRate) * 100;
    setTurbineCycleEfficiency(tCE.toFixed(2));
  };

  const calculateTurbineStageEfficiency = () => {
    const tSE = (actualEnthalpy / isentropicEnthalpy) * 100;
    setTurbineStageEfficiency(tSE.toFixed(2));
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
        <Text style={styles.sectionTitle}>Section 1: Turbine Heat Rate</Text>
        {isSectionActive("section1") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Q1 (Main Steam Flow)"
              onChangeText={(value) => setQ1(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="H1 (Main Steam Enthalpy)"
              onChangeText={(value) => setH1(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="h2 (Feed Water Enthalpy)"
              onChangeText={(value) => setH2(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Q2 (Reheat Steam Flow)"
              onChangeText={(value) => setQ2(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="H3 (Hot Reheat Enthalpy)"
              onChangeText={(value) => setH3(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="H4 (Cold Reheat Enthalpy)"
              onChangeText={(value) => setH4(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Gross Generator Output"
              onChangeText={(value) =>
                setGrossGeneratorOutput(parseFloat(value))
              }
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateTurbineHeatRate} />
            <Text style={styles.result}>
              Turbine Heat Rate: {turbineHeatRate} KCal/kWh
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>Section 2: Unit Heat Rate</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Boiler Efficiency"
              onChangeText={(value) => setBoilerEfficiency(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateUnitHeatRate} />
            <Text style={styles.result}>
              Unit Heat Rate: {unitHeatRate} KCal/kWh
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section3")}
      >
        <Text style={styles.sectionTitle}>
          Section 3: Turbine Cycle Efficiency
        </Text>
        {isSectionActive("section3") && (
          <View style={styles.sectionContent}>
            <Text style={styles.info}>
              Turbine Heat Rate: {turbineHeatRate} KCal/kWh
            </Text>
            <Button
              title="Calculate"
              onPress={calculateTurbineCycleEfficiency}
            />
            <Text style={styles.result}>
              Turbine Cycle Efficiency: {turbineCycleEfficiency} %
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section4")}
      >
        <Text style={styles.sectionTitle}>
          Section 4: Turbine Stage Efficiency
        </Text>
        {isSectionActive("section4") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Actual Enthalpy"
              onChangeText={(value) => setActualEnthalpy(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Isentropic Enthalpy"
              onChangeText={(value) => setIsentropicEnthalpy(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button
              title="Calculate"
              onPress={calculateTurbineStageEfficiency}
            />
            <Text style={styles.result}>
              Turbine Stage Efficiency: {turbineStageEfficiency} %
            </Text>
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

export default Turbine;
