import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Article from "../Screens/Payment";
import Feed from "../Screens/Feed";
import Home from "../Screens/Home";

const Drawernav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Article"
        // intialRouteName="Article"
        component={Article}
      />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
};

export default Drawernav;
