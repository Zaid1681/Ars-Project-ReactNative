import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Payment from "../Screens/Payment";
import Stacks from "../Screens/Feed";
import Home from "../Screens/Home";

const Appstack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="A.R.S" component={Home} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Stacks" component={Stacks} />
    </Drawer.Navigator>
  );
};

export default Appstack;
