import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PowerCosumption = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Navigate to the desired screen
    navigation.navigate("Stacks");
  };
  return (
    <View style={{ paddingBottom: 50 }}>
      <Text
        style={{
          fontSize: 25,
          display: "flex",
          textAlign: "center",
          paddingVertical: 40,
        }}
      >
        POWER CONSUMPTION STATS
      </Text>

      <View style={{ paddingHorizontal: 80 }}>
        <Button
          onPress={handleButtonPress}
          title="STACKS"
          color="#438B41"
          accessibilityLabel="Learn more about this purple button"
          style={{ paddingVertical: 20 }}
        />
      </View>
    </View>
  );
};

export default PowerCosumption;
