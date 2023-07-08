import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Feed from "./Screens/Feed";
import Home from "./Screens/Home";
import Appstack from "./navigations/Appstack";
// import Authnavigate from "./navigations/Authnavigate";
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      {/* <Stack.Navigator
        screenOptions={{ headerShown: false }}
        intialRouteName="Feed"
      > */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Feed" component={Feed} /> */}
      {/* </Stack.Navigator> */}
      <Appstack />
      {/* I can add here more routes as a component */}
    </NavigationContainer>
  );
}
