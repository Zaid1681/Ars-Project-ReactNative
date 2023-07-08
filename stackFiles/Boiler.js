import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  { c: "0.01", hf: "0.01", hg: "2501" },
  { c: "4", hf: "16.79", hg: "2509" },
  { c: "5", hf: "21", hg: "2511" },
  { c: "6", hf: "25.21", hg: "2512" },
  { c: "8", hf: "33.61", hg: "2516" },
  { c: "10", hf: "42.01", hg: "2520" },
  { c: "11", hf: "46.19", hg: "2522" },
  { c: "12", hf: "50.4", hg: "2523" },
  { c: "13", hf: "54.59", hg: "2525" },
  { c: "14", hf: "58.8", hg: "2527" },
  { c: "15", hf: "62.99", hg: "2529" },
  { c: "16", hf: "67.17", hg: "2531" },
  { c: "17", hf: "71.36", hg: "2533" },
  { c: "18", hf: "75.57", hg: "2534" },
  { c: "19", hf: "79.76", hg: "2536" },
  { c: "20", hf: "83.94", hg: "2538" },
  { c: "21", hf: "88.13", hg: "2540" },
  { c: "22", hf: "92.32", hg: "2542" },
  { c: "23", hf: "96.5", hg: "2544" },
  { c: "24", hf: "100.7", hg: "2545" },
  { c: "25", hf: "104.9", hg: "2547" },
  { c: "26", hf: "109", hg: "2549" },
  { c: "27", hf: "113.2", hg: "2551" },
  { c: "28", hf: "17.4", hg: "2553" },
  { c: "29", hf: "121.6", hg: "2554" },
  { c: "30", hf: "125.8", hg: "2556" },
  { c: "31", hf: "130", hg: "2558" },
  { c: "32", hf: "134.1", hg: "2560" },
  { c: "33", hf: "138.3", hg: "2562" },
  { c: "34", hf: "142.5", hg: "2563" },
  { c: "35", hf: "146.7", hg: "2565" },
  { c: "36", hf: "150.8", hg: "2567" },
  { c: "38", hf: "159.2", hg: "2571" },
  { c: "40", hf: "167.5", hg: "2574" },
  { c: "45", hf: "188.4", hg: "2583" },
  { c: "50", hf: "209.3", hg: "2592" },
  { c: "55", hf: "230.2", hg: "2601" },
  { c: "60", hf: "251.1", hg: "2610" },
  { c: "65", hf: "272", hg: "2618" },
  { c: "70", hf: "293", hg: "2627" },
  { c: "75", hf: "313.9", hg: "2635" },
  { c: "80", hf: "334.9", hg: "2644" },
  { c: "85", hf: "355.9", hg: "2652" },
  { c: "90", hf: "376.9", hg: "2660" },
  { c: "95", hf: "398", hg: "2668" },
  { c: "100", hf: "419", hg: "2676" },
  { c: "110", hf: "461.3", hg: "2691" },
  { c: "120", hf: "503.7", hg: "2706" },
  { c: "130", hf: "546.3", hg: "2720" },
  { c: "140", hf: "589.1", hg: "2734" },
  { c: "150", hf: "632.2", hg: "2746" },
  { c: "160", hf: "675.5", hg: "2758" },
  { c: "170", hf: "719.2", hg: "2769" },
  { c: "180", hf: "763.2", hg: "2778" },
  { c: "190", hf: "807.6", hg: "2786" },
  { c: "200", hf: "852.4", hg: "2793" },
  { c: "210", hf: "897.8", hg: "2798" },
  { c: "220", hf: "943.6", hg: "2802" },
  { c: "230", hf: "990.1", hg: "2804" },
  { c: "240", hf: "1037.3", hg: "2804" },
  { c: "250", hf: "1085.3", hg: "2802" },
  { c: "260", hf: "1134.4", hg: "2797" },
  { c: "270", hf: "1184.5", hg: "2790" },
  { c: "280", hf: "1236", hg: "2780" },
  { c: "290", hf: "1289", hg: "2766" },
  { c: "300", hf: "1344", hg: "2749" },
  { c: "320", hf: "1461.5", hg: "2700" },
  { c: "340", hf: "1594.1", hg: "2622" },
  { c: "360", hf: "1760.5", hg: "2481" },
  { c: "374.14", hf: "2099.3", hg: "2099" },
];

const Boiler = () => {
  const [Q, setQ] = useState("");
  const [q, setq] = useState("");
  const [GCV, setGCV] = useState("");
  const [c, setC] = useState("");
  const [hf, setHf] = useState("");
  const [hg, setHg] = useState("");
  const [result, setResult] = useState("");

  const multiplyInputs = () => {
    const result = ((Number(Q) * (Number(hg) - Number(hf))) / (q * GCV)) * 100;
    const roundedResult = result.toFixed(2); // Round the result to 2 decimal places
    setResult(`Boiler Efficiency: ${roundedResult}`);
  };

  const handleCChange = (value) => {
    setC(value);
    const foundData = data.find((item) => item.c === value);
    if (foundData) {
      setHf(foundData.hf);
      setHg(foundData.hg);
    } else {
      setHf("");
      setHg("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boiler Efficiency Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setQ}
          value={Q}
          keyboardType="numeric"
          placeholder="Steam Generated (kg/hr)"
        />
        <TextInput
          style={styles.input}
          onChangeText={setq}
          value={q}
          keyboardType="numeric"
          placeholder="Fuel Used (kg/hr)"
        />
        <TextInput
          style={styles.input}
          onChangeText={setGCV}
          value={GCV}
          keyboardType="numeric"
          placeholder="GCV (kcal/kg)"
        />
        <TextInput
          style={styles.input}
          onChangeText={handleCChange}
          value={c}
          keyboardType="numeric"
          placeholder="Feed Water Temperature (°C)"
        />
      </View>
      <View style={styles.table}>
        <Text style={styles.tableHeader}>c</Text>
        <Text style={styles.tableHeader}>hf</Text>
        <Text style={styles.tableHeader}>hg</Text>
        <Text style={styles.tableValue}>{c}</Text>
        <Text style={styles.tableValue}>{hf}</Text>
        <Text style={styles.tableValue}>{hg}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={multiplyInputs}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  table: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  tableHeader: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
  },
  tableValue: {
    flex: 1,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
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
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Boiler;
