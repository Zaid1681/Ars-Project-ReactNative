import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Animatable from "react-native-animatable";
import Boiler from "../stackFiles/Boiler";
import Pump from "../stackFiles/Pump";
import Chiler from "../stackFiles/Chiller";
import Thermal from "../stackFiles/Thermal";
import Coal from "../stackFiles/Coal";
import Condenser from "../stackFiles/Condenser";
import Eco from "../stackFiles/Eco";
import Turbine from "../stackFiles/Turbine";
import arsLogo from "../assets/arsImg.jpg";
import ham2 from "../assets/icons/ham2.png";
import { DrawerActions } from "@react-navigation/native";

import Airhandling from "../stackFiles/AirHandling";
import CoolingTower from "../stackFiles/CoolingTower";

const Stack = createStackNavigator();

const Feed = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Boiler"
        component={Boiler}
        options={{ title: "Boiler" }}
      />
      <Stack.Screen name="Pump" component={Pump} options={{ title: "Pump" }} />
      <Stack.Screen
        name="Chiler"
        component={Chiler}
        options={{ title: "Chiler" }}
      />
      <Stack.Screen
        name="Airhandling"
        component={Airhandling}
        options={{ title: "Airhandling" }}
      />
      <Stack.Screen
        name="CoolingTower"
        component={CoolingTower}
        options={{ title: "CoolingTower" }}
      />
      <Stack.Screen
        name="Thermal"
        component={Thermal}
        options={{ title: "Thermal" }}
      />
      <Stack.Screen name="Coal" component={Coal} options={{ title: "Coal" }} />
      <Stack.Screen
        name="Eco"
        component={Eco}
        options={{ title: "Econimiser" }}
      />
      <Stack.Screen
        name="Turbine"
        component={Turbine}
        options={{ title: "Turbine" }}
      />
      <Stack.Screen
        name="Condenser"
        component={Condenser}
        options={{ title: "Turbine" }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = (systemName) => {
    if (systemName === "Boiler") {
      navigation.navigate("Boiler");
    } else if (systemName === "Pump") {
      navigation.navigate("Pump");
    } else if (systemName === "Chiler") {
      navigation.navigate("Chiler");
    } else if (systemName === "Airhandling") {
      navigation.navigate("Airhandling");
    } else if (systemName === "Thermal") {
      navigation.navigate("Thermal");
    } else if (systemName === "CoolingTower") {
      navigation.navigate("CoolingTower");
    } else if (systemName === "Coal") {
      navigation.navigate("Coal");
    } else if (systemName === "Economiser and Air Pre-heater") {
      navigation.navigate("Eco");
    } else if (systemName === "Turbine") {
      navigation.navigate("Turbine");
    } else if (systemName === "Condenser") {
      navigation.navigate("Condenser");
    } else {
      Alert.alert(`Selected ${systemName}`);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            // flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: "#ffff",
          }}
        >
          <Image
            source={arsLogo}
            style={{
              width: 87,
              height: 45,
              objectFit: "contain",
              // alignSelf: "flex-start",
              // padding: 20,
              // marginVertical: 10,

              borderRadius: 30,
            }}
          />
          <TouchableOpacity
            style={{ zIndex: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={ham2}
              style={{
                width: 30,
                height: 30,
                objectFit: "cover",
                alignSelf: "flex-end",
                // marginVertical: 20,
                marginTop: 10,
                marginHorizontal: 15,
                // : 20,
                // borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.aboutTitle}>Stacks</Text>
        </View>
        <Animatable.View
          style={styles.subContainer}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Boiler")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/boiler.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Boiler</Text>
          </TouchableOpacity>
          <View style={styles.gapp} />

          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Chiler")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/chiller.jpg")}
              style={styles.icon}
            />
            <View>
              <Text style={styles.buttonText}>Chiller</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ height: 10 }} />
        <Animatable.View
          style={styles.subContainer}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Pump")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/pump.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Pump</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
          <View style={styles.gapp} />

          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("CoolingTower")}
            style={styles.buttonContainer}
          >
            <View>
              <Image
                source={require("../assets/icons/coolingTower.png")}
                style={styles.icon}
              />
              <Text style={styles.buttonText}>CoolingTower</Text>
            </View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ height: 10 }} />
        <Animatable.View
          style={[styles.subContainer]}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          {/* <View style={styles.shadow}> */}
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Airhandling")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/airhandling.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Airhandling</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
          {/* </View> */}
          <View style={styles.gapp} />
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Thermal")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/thermal.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Thermal</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ height: 10 }} />
        <Animatable.View
          style={[styles.subContainer]}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          {/* <View style={styles.shadow}> */}
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Coal")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/Coal.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Coal</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
          {/* </View> */}
          <View style={styles.gapp} />
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Turbine")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/turbine.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Turbine</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ height: 10 }} />
        <Animatable.View
          style={[styles.subContainer]}
          animation="fadeInUp"
          duration={500}
          delay={400}
        >
          {/* <View style={styles.shadow}> */}
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Eco")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/eco.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Economiser and Air Pre-Heater</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
          {/* </View> */}
          <View style={styles.gapp} />
          <TouchableOpacity
            // style={styles.button}
            onPress={() => navigation.navigate("Condenser")}
            style={styles.buttonContainer}
          >
            <Image
              source={require("../assets/icons/condenser.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Condenser</Text>
            {/* <Text style={styles.buttonText}>Boiler</Text> */}
          </TouchableOpacity>
        </Animatable.View>
        <View style={{ height: 10 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 30,

    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5F5F5", // Green background color
  },
  aboutTitle: {
    fontSize: 25,
    // paddingHorizontal: 5,
    textAlign: "center",
    paddingVertical: 20,
    fontFamily: "Poppins-Medium",
  },
  subContainer: {
    // marginVertical: 10,
    // width: "100%",
    // flex: 1,
    flexDirection: "row",
    paddingHorizontal: 40,
    // gap: "10px",
    // borderRadius: 10,
    // height: "20rem",
    // paddingHorizontal: "10px",
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#ffff", // Green background color
    // flex: 0.5,
    flexDirection: "row",
    height: 120,
    width: 50,
    // borderWidth: 2,
    textAlign: "center",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 5,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    // fontFamily: "mont",
    // fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    fontWeight: "Bold",
    color: "#808080",
  },

  gapp: {
    width: 10,
  },
  buttons: {
    height: "140%",
  },
  animatedButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGap: {
    width: "10px",
    height: "10px",
  },
  icon: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Feed;
