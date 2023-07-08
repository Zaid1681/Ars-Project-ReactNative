import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Animatable from "react-native-animatable";
import Boiler from "../stackFiles/Boiler";
import Pump from "../stackFiles/Pump";
import Chiler from "../stackFiles/Chiller";
import arsLogo from "../assets/arsImg.jpg";
import ham from "../assets/icons/ham.png";
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
    } else if (systemName === "CoolingTower") {
      navigation.navigate("CoolingTower");
    } else {
      Alert.alert(`Selected ${systemName}`);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
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
            source={ham}
            style={{
              width: 18,
              height: 18,
              objectFit: "cover",
              alignSelf: "flex-end",
              // marginVertical: 20,
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
          onPress={() => navigation.navigate("Pump")}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Airhandling</Text>
          {/* <Text style={styles.buttonText}>Boiler</Text> */}
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,

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
