// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Payment from "../Screens/Payment";
import Stacks from "../Screens/Feed";
import Home from "../Screens/Home";
import Icon from "react-native-vector-icons/Ionicons";

// import { View, Button } from "react-native";

// const Appstack = () => {
//   const Drawer = createDrawerNavigator();
//   const drawerOptions = {
//     activeTintColor: "red", // Color of the active drawer item text
//     inactiveTintColor: "blue", // Color of the inactive drawer item text
//     labelStyle: {
//       fontSize: 16, // Font size of the drawer item text
//       fontWeight: "bold", // Font weight of the drawer item text
//     },
//     // You can add more styles as needed
//   };

//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="A.R.S" component={Home} />
//       <Drawer.Screen name="Payment" component={Payment} />
//       <Drawer.Screen name="Stacks" component={Stacks} />
//     </Drawer.Navigator>
//     // <View>Hello</View>
//   );
// };

// export default Appstack;

import * as React from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../components/CustomDrawer";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "green",
        drawerActiveTintColor: "#ffff",
        drawerLabelStyle: {
          fontFamily: "Inter-Variable",
          fontSize: 15,
          fontWeight: "bold",
        },
      }}
    >
      {/* <TouchableOpacity
        style={{ zindex: 10 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Text style={{ color: "red", textAlign: "right", fontSize: 15 }}>
          Press Here
        </Text>
      </TouchableOpacity> */}
      <Drawer.Screen
        name="A.R.S"
        component={Home}
        // options={{ }}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <Icon
              name="md-home"
              size={size}
              color={color}
              // color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          title: "Payment",
          drawerIcon: ({ focused, size, color }) => (
            <Icon
              name="wallet"
              size={size}
              color={color}
              // color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Stacks"
        component={Stacks}
        options={{
          headerShown: false,
          title: "Stacks",
          drawerIcon: ({ focused, size, color }) => (
            <Icon
              name="calculator"
              size={size}
              color={color}
              // color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
