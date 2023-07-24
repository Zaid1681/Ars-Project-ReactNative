import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Focusedstatusbar from "../components/FocusedStatus";
import { COLORS } from "../constants";
import ars from "../assets/ars.png";
import arsLogo from "../assets/arsImg.jpg";
import award from "../assets/icons/award.png";
import Service from "../components/Service";
import Team from "../components/Team";
import History from "../components/history";
import PowerCosumption from "../components/PowerCosumption";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AutoHeightWebView from "react-native-autoheight-webview";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useCallback } from "react";
import { DrawerActions } from "@react-navigation/native";
import ham from "../assets/icons/ham.png";

SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();
const renderItem = ({ item }) => {
  return (
    <View style={{ display: "flex" }}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
};
const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Variable": require("../assets/fonts/Inter-Variable.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Montserrat-Variable": require("../assets/fonts/Montserrat-Variable.ttf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // data for flat list
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];
  const content = `After working in the area of Solar Thermal & PV Projects for
  four years, Mr. Sachin Deshpande, Director has started Company
  as SAN Energy System in1996 in the area on the solar
  projects.The company has their full-fledged manufacturing
  facility ofsolar water heater module. The company has
  diversified itsbusiness from the Solar Water Heating/ PV
  Application to the field of Energy Conservation through Energy
  Audit.`;
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Focusedstatusbar backgroundColor={COLORS.secondary} />

      {/* <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Go to notifications"
      /> */}
      <ScrollView>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zindex: -1,
            backgroundColor: COLORS.primary,
          }}
        >
          {/* <View style={{ height: 310, backgroundColor: COLORS.primary }}></View> */}
          <ImageBackground
            source={require("../assets/1.jpg")}
            //   style={{ padding: 2, height: 150, opacity: 0.5 }}
            style={{ height: 310, opacity: 0.7 }}
          ></ImageBackground>
          <View
            style={{
              flex: 900,
              backgroundColor: COLORS.bgColor,
              borderRadius: 13,
            }}
          ></View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Image
              source={arsLogo}
              style={{
                width: 90,
                height: 45,
                objectFit: "contain",
                // alignSelf: "flex-start",
                // padding: 20,
                marginVertical: 10,

                borderRadius: 10,
              }}
            />
            <TouchableOpacity
              style={{ zIndex: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              {/* <Text style={{ color: "red", textAlign: "right", fontSize: 15 }}>
              Press Here
            </Text> */}
              <Image
                source={ham}
                style={{
                  width: 18,
                  height: 18,
                  objectFit: "cover",
                  alignSelf: "flex-end",
                  marginVertical: 20,
                  marginHorizontal: 15,
                  // : 20,
                  // borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 20, paddingVertical: 10 }}>
            <Text
              style={{
                color: "#f5f5f5",
                fontSize: 28,
                // paddingVertical: 2,
                // fontWeight: 1000,
                fontFamily: "Montserrat-SemiBold",
                textAlign: "center",
              }}
            >
              Welcome To
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 50,
                paddingTop: 10,
                textAlign: "center",
                // paddingLeft: ,
                // fontWeight: 1000,
                fontFamily: "Poppins-Bold",
              }}
            >
              A.R.S
            </Text>
            {/* <Text
              style={{
                color: "white",
                fontSize: 15,
                top: -10,
                textAlign: "center",
                // paddingLeft: ,
                // fontWeight: 1000,
                fontFamily: "Poppins-Bold",
              }}
            >
              (ARS Full form)
            </Text> */}
            <Text
              style={{
                color: "white",
                // paddingLeft: 10,
                textAlign: "center",
                paddingBottom: 10,
                fontSize: 30,
                // color: "green",
                fontFamily: "Poppins-Bold",
              }}
            >
              Energy Auditors
            </Text>
          </View>
          {/* Landing Page View */}

          {/* About Us View */}

          <View style={{ paddingTop: 30, marginHorizontal: 10 }}>
            <Text style={styles.aboutTitle}>About Us</Text>
            <View style={styles.aboutView}>
              {/* <Text style={styles.aboutText}> */}
              <AutoHeightWebView
                style={{
                  justifyContent: "center",
                  textAlign: "justify",
                  width: 258,
                }}
                customScript={`document.body.style.textAlign = 'justify', document.body.style.fontSize =16 , document.body.style.fontFamily='Poppins-SemiBold' ;`}
                source={{ html: `<p>${content}</p>` }}
                scalesPageToFit={false}
              />
              {/* </Text> */}
            </View>
            <View style={{ padding: 20, borderRadius: 10 }}>
              <Image
                source={ars}
                style={{
                  width: 300,
                  height: 190,
                  objectFit: "cover",
                  alignSelf: "center",
                  marginVertical: 20,
                  padding: 20,
                  borderRadius: 10,
                }}
              />
              <Image
                source={award}
                style={{
                  width: 70,
                  height: 70,
                  objectFit: "cover",
                  position: "absolute",
                  marginTop: 20,
                  marginLeft: -20,
                }}
              />
            </View>
          </View>
          {/* service offeredcards */}
          <View>
            <Service />
          </View>
          <View>
            <History />
          </View>
          <View>
            <Team />
          </View>
          <View>
            <PowerCosumption />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// styles for the app

const styles = StyleSheet.create({
  // keyPoints: {
  //   // display: "flex",
  //   flex: 1,
  //   flexDirection: "row",
  //   gap: 10,
  // },
  // keytitle: {
  //   fontSize: 20,
  // },
  aboutTitle: {
    fontSize: 25,
    paddingHorizontal: 5,
    paddingVertical: 20,
    fontFamily: "Poppins-Medium",
  },
  aboutText: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    // margin: "auto",
    textAlign: "left",
    // alignSelf: "center",
  },
  aboutView: {
    borderWidth: 1,
    width: "100%",
    padding: 24,
    paddingTop: 30,

    height: 320,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    // backgroundColor: COLORS.primary,
  },
});
export default Home;
