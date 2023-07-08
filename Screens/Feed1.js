import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import * as Animatable from "react-native-animatable";

const Feed1 = ({ navigation }) => {
  const handleButtonPress = (systemName) => {
    if (systemName === "Induction Motor") {
      navigation.navigate("Addition");
    } else {
      Alert.alert(`Selected ${systemName}`);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={200}
      >
        <Button
          title="Induction Motor"
          onPress={() => handleButtonPress("Induction Motor")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Lighting System"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Pump"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Cooling Tower"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Compression Chiller"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Blower"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Air Compressor"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Buildings"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
      <View
        style={styles.buttonContainer}
        animation="fadeInUp"
        duration={1000}
        delay={400}
      >
        <Button
          title="Electrical System"
          onPress={() => handleButtonPress("Lighting System")}
          color="#808080"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FF00", // Green background color
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  animatedButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Feed;
