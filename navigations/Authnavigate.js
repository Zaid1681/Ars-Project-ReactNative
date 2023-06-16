import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Home from "../Screens/Home";
// import Article from "../Screens/Article";

const Authnavigate = () => {
  return (
    // <View>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      intialRouteName="Home"
    >
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
    // </View>
  );
};

export default Authnavigate;
