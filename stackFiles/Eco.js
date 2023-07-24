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

const Eco = () => {
  const [fwtempout, setfwtempout] = useState("");
  const [fwtempin, setfwtempin] = useState("");
  const [fgtempin, setfgtempin] = useState("");
  const [Eco, setEco] = useState("");
  const [EcoPercentage, setEcoPercentage] = useState("");

  const [Feedw, setFeedw] = useState("");
  const [fwtempout2, setfwtempout2] = useState("");
  const [fwtempin2, setfwtempin2] = useState("");
  const [heatE, setheatE] = useState("");

  const [airtempout, setairtempout] = useState("");
  const [airtempin, setairtempin] = useState("");
  const [Fuelgtempin, setFuelgtempin] = useState("");
  const [APH, setAPH] = useState("");
  const [APHPercentage, setAPHPercentage] = useState("");

  const [airflow, setairflow] = useState("");
  const [airtempout2, setairtempout2] = useState("");
  const [airtempin2, setairtempin2] = useState("");
  const [heatAPH, setheatAPH] = useState("");

  const [gasl, setgasl] = useState("");
  const [gasin, setgasin] = useState("");
  const [airleakage, setairleakage] = useState("");

  const [sattemp, setsattemp] = useState("");
  const [feedwater, setfeedwater] = useState("");
  const [TTD, setTTD] = useState("");

  const [draintemp, setdraintemp] = useState("");
  const [feedwaterin, setfeedwaterin] = useState("");
  const [DCA, setDCA] = useState("");

  const calculateEco = () => {
    const Eco = (fwtempout - fwtempin) / (fgtempin - fwtempin);
    const EcoPercentage = (Eco * 100).toFixed(2);
    setEcoPercentage(EcoPercentage);
  };

  const calculateheatE = () => {
    const heatE = Feedw * 1 * (fwtempout2 - fwtempin2);
    setheatE(heatE.toFixed(2));
  };

  const calculateAPH = () => {
    const APH = (airtempout - airtempin) / (Fuelgtempin - airtempin);
    const APHPercentage = (APH * 100).toFixed(2);
    setAPHPercentage(APHPercentage);
  };

  const calculateHeatAPH = () => {
    const heatAPH = airflow * 0.24 * (airtempout2 - airtempin2);
    setheatAPH(heatAPH.toFixed(2));
  };

  const calculateairleakage = () => {
    const airleakage = ((gasl - gasin) / (21 - gasl)) * 100;
    setairleakage(airleakage.toFixed(2));
  };

  const calculateTTD = () => {
    const TTD = sattemp - feedwater;
    setTTD(TTD.toFixed(2));
  };

  const calculateDCA = () => {
    const DCA = draintemp - feedwaterin;
    setDCA(DCA.toFixed(2));
  };

  const [activeSection, setActiveSection] = useState(null);

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
        <Text style={styles.sectionTitle}>Economiser Efectiveness</Text>
        {isSectionActive("section1") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="FW temp out"
              onChangeText={(value) => setfwtempout(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="FW temp in"
              onChangeText={(value) => setfwtempin(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="F Gas temp Eco in"
              onChangeText={(value) => setfgtempin(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateEco} />
            <Text style={styles.result}>
              Economiser Effectiveness: {EcoPercentage}%
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>Heat Pick-up in Economiser</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="feed water flow"
              onChangeText={(value) => setFeedw(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="FW temp out"
              onChangeText={(value) => setfwtempout2(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="FW temp in"
              onChangeText={(value) => setfwtempin2(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateheatE} />
            <Text style={styles.result}>
              Heat Pick-up in Economiser: {heatE}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>APH Effectiveness</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Air temp APH out"
              onChangeText={(value) => setairtempout(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Air temp APH in"
              onChangeText={(value) => setairtempin(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Fuel Gas temp APH in"
              onChangeText={(value) => setFuelgtempin(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateAPH} />
            <Text style={styles.result}>
              APH Effectiveness: {APHPercentage}%
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>Heat Pick-up APH</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Air Flow"
              onChangeText={(value) => setairflow(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Air temp APH out"
              onChangeText={(value) => setairtempout2(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Air temp APH in"
              onChangeText={(value) => setairtempin2(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateHeatAPH} />
            <Text style={styles.result}>Heat Pick-up in APH: {heatAPH}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section2")}
      >
        <Text style={styles.sectionTitle}>Air leakage estimation</Text>
        {isSectionActive("section2") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="02 % in thee gas leaving in APH"
              onChangeText={(value) => setgasl(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="02 % in the gas entering in APH"
              onChangeText={(value) => setgasin(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateairleakage} />
            <Text style={styles.result}>
              Air leakage estimation: {airleakage}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section6")}
      >
        <Text style={styles.sectionTitle}>Terminal Temperature Difference</Text>
        {isSectionActive("section6") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Saturation Temp of extraction steam C"
              onChangeText={(value) => setsattemp(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Feed water outlet temp C"
              onChangeText={(value) => setfeedwater(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateTTD} />
            <Text style={styles.result}>
              Terminal Temperature Difference {TTD}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => toggleSection("section6")}
      >
        <Text style={styles.sectionTitle}>Drain Cooler Approach</Text>
        {isSectionActive("section6") && (
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.input}
              placeholder="Drain outlet temp C"
              onChangeText={(value) => setdraintemp(parseFloat(value))}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Inlet feed water temp C"
              onChangeText={(value) => setfeedwaterin(parseFloat(value))}
              keyboardType="numeric"
            />
            <Button title="Calculate" onPress={calculateDCA} />
            <Text style={styles.result}>Drain cooler Approach {DCA}</Text>
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

export default Eco;
