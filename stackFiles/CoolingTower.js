import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const CoolingTower = () => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [E, setE] = useState("");
  const [F, setF] = useState("");
  const [G, setG] = useState("");
  const [H, setH] = useState("");

  const calculateValues = () => {
    const range = parseFloat(A) - parseFloat(B);
    const approach = parseFloat(B) - parseFloat(C);
    const effectiveness = (parseFloat(E) / (parseFloat(E) + approach)) * 100;

    setF(range.toFixed(2));
    setG(approach.toFixed(2));
    setH(effectiveness.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cooling Tower Efficiency Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CT-Inlet Water Temperature (℃):</Text>
        <TextInput
          value={A}
          onChangeText={setA}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CT-Outlet Water Temperature (℃):</Text>
        <TextInput
          value={B}
          onChangeText={setB}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Ambient-Wet Bulb Near Cooling Tower (℃):
        </Text>
        <TextInput
          value={C}
          onChangeText={setC}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Ambient-Dry Bulb Near Cooling Tower (℃):
        </Text>
        <TextInput
          value={D}
          onChangeText={setD}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>COC - Cycle of Concentration:</Text>
        <TextInput
          value={E}
          onChangeText={setE}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateValues}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={styles.table}>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Range, (A - B) (℃)</Text>
          <Text style={styles.tableValue}>{F}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>Approach, (B - C) (℃)</Text>
          <Text style={styles.tableValue}>{G}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableCell}>
          <Text style={styles.tableHeader}>
            Effectiveness, (F / (F + G)) * 100 (%)
          </Text>
          <Text style={styles.tableValue}>{H}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  tableValue: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CoolingTower;
