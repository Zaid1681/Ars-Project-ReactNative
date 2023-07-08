import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import ImageSlider from "react-native-image-slider-box";
import { SliderBox } from "react-native-image-slider-box";

const Team = () => {
  const images = [
    require("../assets/1.jpg"),
    require("../assets/2.jpg"),
    require("../assets/ars.png"),
  ];

  return (
    <View style={{ paddingTop: 40 }}>
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.histTitle}>Our Team</Text>
        <View style={styles.container}>
          <SliderBox
            images={images}
            dotColor="green"
            inactiveDotColor="black"
            dotStyle={{ height: 5 }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // duration: 300,
    // transform: 300,
    // alignItems: "center",
    // padding: 10,
    // margin: 100,
    // width: "20%",
  },
  image: {
    width: 330,
    // marginHorizontal: "auto",
    height: 200,
    borderRadius: 10,
    // height: "100%",
  },
  histTitle: {
    fontSize: 25,
    paddingHorizontal: 5,
    paddingVertical: 20,
    fontFamily: "Poppins-Medium",
  },
});
// });

export default Team;
