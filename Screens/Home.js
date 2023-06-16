import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import Focusedstatusbar from "../components/FocusedStatus";
import { COLORS } from "../constants";
import ars from "../assets/ars.png";
import Service from "../components/Service";
import History from "../components/history";
import PowerCosumption from "../components/PowerCosumption";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Focusedstatusbar backgroundColor={COLORS.secondary} />
      <ScrollView>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zindex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 900, backgroundColor: COLORS.white }}></View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ paddingTop: 15, paddingVertical: 15 }}>
            <Text style={{ color: "white", fontSize: 45, paddingVertical: 10 }}>
              Welcome To
            </Text>
            <Text
              style={{
                color: "white",
                paddingLeft: 10,
                fontSize: 25,
                color: "green",
              }}
            >
              A.R.S Energy Auditors
            </Text>
          </View>
          {/* Landing Page View */}
          <View>
            <Text
              style={{
                fontSize: 18,
                color: "green",
                paddingTop: 50,
                lineHeight: 25,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
          {/* About Us View */}

          <View style={{ paddingTop: 70 }}>
            <Text
              style={{
                fontSize: 25,
                display: "flex",
                textAlign: "center",
                padding: 30,
              }}
            >
              About Us
            </Text>
            <Text
              style={{
                lineHeight: 25,
                fontSize: 17,
                textAlign: "center",
                margin: "auto",
                textAlign: "justify",
              }}
            >
              After working in the area of Solar Thermal & PV Projects for four
              years, Mr. Sachin Deshpande, Director has started Company as SAN
              Energy System in1996 in the area on the solar projects. The
              company has their full-fledged manufacturing facility of solar
              water heater module. The company has diversified its business from
              the Solar Water Heating/ PV Application to the field of Energy
              Conservation through Energy Audit. With a team of BEE Accredited
              and Certified Energy Auditors, the company has successfully
              completed several Energy Audit Assignments with the
              techno-economic analysis under “A.R.S. Energy Auditors‟. A.R.S.
              has completed more than 700 audits so far in almost all sectors in
              India and Abroad. Solar PV project consultancy is also one of the
              vertical of the company.
            </Text>
            <Image
              source={ars}
              style={{
                width: 400,
                height: 250,
                borderRadius: 10,
                alignSelf: "center",
                marginVertical: 20,
              }}
            />
          </View>
          {/* service offeredcards */}
          <View>
            <Service />
          </View>
          <View>
            <History />
          </View>
          <View>
            <PowerCosumption />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
