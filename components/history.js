import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import award from "../assets/2.jpg";

const History = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          display: "flex",
          textAlign: "center",
          paddingVertical: 40,
        }}
      >
        OUR HISTORY
      </Text>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 15, textAlign: "justify" }}>
          After working in the area of Solar Thermal & PV Projects for four
          years, Mr. Sachin Deshpande, Director has started Company as SAN
          Energy System in1996 in the area on the solar projects. The company
          has their full-fledged manufacturing facility of solar water heater
          module. The company has diversified its business from the Solar Water
          Heating/ PV Application to the field of Energy Conservation through
          Energy Audit. With a team of BEE Accredited and Certified Energy
          Auditors, the company has successfully completed several Energy Audit
          Assignments with the techno-economic analysis under “A.R.S. Energy
          Auditors‟. A.R.S. has completed more than 700 audits so far in almost
          all sectors. Solar PV project consultancy is also one of the vertical
          of the company.
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            display: "flex",
            textAlign: "center",
            padding: 10,
            fontWeight: 600,
          }}
        >
          Awards and Recognition
        </Text>
        <View style={{ padding: 20, textAlign: "justify" }}>
          <FlatList
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
          />
          <Image
            source={award}
            style={{
              width: 400,
              height: 250,
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

export default History;
