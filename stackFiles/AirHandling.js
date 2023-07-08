import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const Airhandling = () => {
  const [F, setF] = useState("");
  const [G, setG] = useState("");
  const [J, setJ] = useState("");
  const [N, setN] = useState("");
  const [Q, setQ] = useState("");
  const [R, setR] = useState("");
  const [ST, setST] = useState("");
  const [T, setT] = useState("");

  const calculateValues = () => {
    const ST = (F * G * 3600 * J * parseFloat(N - Q)) / (4.18 * 3024);
    const T = parseFloat(R) / parseFloat(ST);

    setST(ST.toFixed(2));
    setT(T.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Air Handling Unit (AHU) Calculator</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Cross section Area of AHU (Outlet) Sq.m:
          </Text>
          <TextInput
            value={F}
            onChangeText={setF}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Avg. Velocity of Air m/sec:</Text>
          <TextInput
            value={G}
            onChangeText={setG}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Density of Air (ρ) kg/m3:</Text>
          <TextInput
            value={J}
            onChangeText={setJ}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enthalpy of Inlet Air KJ/kg:</Text>
          <TextInput
            value={N}
            onChangeText={setN}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enthalpy of outlet Air KJ/kg:</Text>
          <TextInput
            value={Q}
            onChangeText={setQ}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Power Input to Motor (measured) kW:</Text>
          <TextInput
            value={R}
            onChangeText={setR}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateValues}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <ScrollView style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Results:</Text>
          <View style={styles.table}>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>Cooling capacity (ST)</Text>
              <Text style={styles.tableValue}>{ST}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableHeader}>
                Specific Power Consumption of AHU (SPC)
              </Text>
              <Text style={styles.tableValue}>{T}</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  resultContainer: {
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  tableCell: {
    flex: 1,
  },
  tableHeader: {
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
  },
  tableValue: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
  },
});

export default Airhandling;
