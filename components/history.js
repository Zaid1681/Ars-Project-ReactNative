import { View, Text, FlatList, Image, StyleSheet } from "react-native";
// import { WebView } from "react-native-webview";
import AutoHeightWebView from "react-native-autoheight-webview";

import React from "react";
import award from "../assets/2.jpg";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const History = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Variable": require("../assets/fonts/Inter-Variable.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Montserrat-Variable": require("../assets/fonts/Montserrat-Variable.ttf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const content = `After working in the area of Solar Thermal & PV Projects for four years, Mr.
    Sachin Deshpande, Director has started Company as SAN Energy System in 1996 in
    the area on the solar projects. The company has their full-fledged manufacturing
    facility of solar water heater module. The company has diversified its business
    from the Solar Water Heating/ PV Application to the field of Energy Conservation
    through Energy Audit. With a team of BEE Accredited and Certified Energy Auditors,
    the company has successfully completed several Energy Audit Assignments with the
    techno-economic analysis under “A.R.S. Energy Auditors‟. A.R.S. has completed more
    than 700 audits so far in almost all sectors. Solar PV project consultancy is also
    one of the verticals of the company.`;
  return (
    <View style={{ paddingTop: 40, marginHorizontal: 10 }}>
      <View style={{ marginBottom: 40, flex: 1 }}>
        <Text style={styles.histTitle}>Our History</Text>
        <View style={styles.histView}>
          {/* <Text style={{ textAlign: "justify", padding: 30 }}>
            After working in the area of Solar Thermal & PV Projects for four
            years, Mr. Sachin Deshpande, Director has started Company as SAN
            Energy System in1996 in the area on the solar projects. The company
            has their full-fledged manufacturing facility of solar water heater
            module. The company has diversified its business from the Solar
            Water Heating/ PV Application to the field of Energy Conservation
            through Energy Audit. With a team of BEE Accredited and Certified
            Energy Auditors, the company has successfully completed several
            Energy Audit Assignments with the techno-economic analysis under
            “A.R.S. Energy Auditors‟. A.R.S. has completed more than 700 audits
            so far in almost all sectors. Solar PV project consultancy is also
            one of the vertical of the company.
          </Text> */}
          <AutoHeightWebView
            style={{
              justifyContent: "center",
              textAlign: "justify",
              width: 269,
            }}
            customScript={`document.body.style.textAlign = 'justify', document.body.style.fontSize =15 , document.body.style.fontFamily='Poppins-SemiBold' ;`}
            source={{ html: `<p>${content}</p>` }}
            scalesPageToFit={false}
          />
        </View>
      </View>
      <View>
        <Text style={styles.histTitle}>Awards and Recognition</Text>
        <View>
          {/* <FlatList
            data={[
              {
                key: "MEDA – 12th State Level Energy Conservation Award \nSector- Energy ( Auditor / Consultants ) -2018-19.",
              },
              {
                key: "MEDA – 11th State Level Energy Conservation Award Sector- Energy ( Auditor / Consultants ) -2017-18.",
              },
              { key: "Best Speaker ( GEDA -EM-EA meet)." },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 17 }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          /> */}
          <View style={{ gap: 20 }}>
            <View style={styles.awardView}>
              <Image
                source={require("../assets/icons/star.png")}
                style={styles.icon}
              />
              <Text style={styles.awardsText}>
                MEDA – 12th State Level Energy Conservation Award \nSector-
                Energy ( Auditor / Consultants ) -2018-19.
              </Text>
            </View>
            <View style={styles.awardView}>
              <Image
                source={require("../assets/icons/star.png")}
                style={styles.icon}
              />
              <Text style={styles.awardsText}>
                MEDA – 12th State Level Energy Conservation Award \nSector-
                Energy ( Auditor / Consultants ) -2018-19.
              </Text>
            </View>
            <View style={styles.awardView}>
              <Image
                source={require("../assets/icons/star.png")}
                style={styles.icon}
              />
              <Text style={styles.awardsText}>
                MEDA – 12th State Level Energy Conservation Award \nSector-
                Energy ( Auditor / Consultants ) -2018-19.
              </Text>
            </View>
          </View>
          <Image
            source={award}
            style={{
              width: 300,
              height: 200,
              borderRadius: 10,
              alignSelf: "center",
              marginVertical: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  histView: {
    borderWidth: 1,
    // width: "100%",
    paddingHorizontal: 20,
    paddingTop: 30,

    height: 420,
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
  },
  histTitle: {
    fontSize: 25,
    paddingHorizontal: 5,
    paddingVertical: 20,
    fontFamily: "Poppins-Medium",
  },
  histText: {
    lineHeight: 22,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    // fontWeight: "bold",
    // margin: "auto",
    textAlign: "left",
    // alignSelf: "center",
  },
  awardsText: {
    lineHeight: 20,
    fontSize: 14,
    fontFamily: "Poppins-SemiBoldItalic",
    textAlign: "center",
    // margin: "auto",
    textAlign: "left",
  },
  icon: {
    width: 15,
    height: 15,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  awardView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});

export default History;
