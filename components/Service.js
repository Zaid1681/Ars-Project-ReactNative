import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import ServiceData from "../constants/ServiceData";

const transition = (
  <Transition.Together>
    <Transition.Change interpolation="easeInOut" durationMs={300} />
  </Transition.Together>
);

const Service = () => {
  const data = ServiceData;
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const ref = React.useRef();

  const handleCardPress = (index) => {
    ref.current.animateNextTransition();
    setHoveredCardIndex(index === hoveredCardIndex ? null : index);
  };

  const getCardStyles = (index) => {
    return [
      styles.card,
      // hoveredCardIndex === index && styles.hoveredCard,
      hoveredCardIndex === index && { transform: [{ scale: 1.1 }] },
    ];
  };

  const getTextStyles = (index) => {
    return [styles.text, hoveredCardIndex === index && styles.hoveredText];
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          paddingVertical: 40,
          fontSize: 25,
          paddingHorizontal: 10,
          paddingVertical: 20,
          fontFamily: "Poppins-Medium",
        }}
      >
        Services We Offer
      </Text>
      <Transitioning.View ref={ref} transition={transition}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <Pressable
              style={{ margin: 10 }}
              key={index}
              onPress={() => handleCardPress(index)}
            >
              <View style={getCardStyles(index)}>
                <View
                  style={[
                    {
                      aspectRatio: 5 / 6,
                      height: 210,
                      backgroundColor: "#ffff",
                      borderWidth: 1,
                      borderRadius: 10,
                      borderRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 2,
                        height: 5,
                      },
                      shadowOpacity: 0.9,
                      shadowRadius: 5,
                      elevation: 10,
                    },
                    hoveredCardIndex === index && {
                      backgroundColor: "#438A43",
                      color: "#ffff",
                    }, // Change the background color on hover
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      padding: 10,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.id}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "black",
                        padding: 5,
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Text>
                    <View style={getTextStyles(index)}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 13,
                          fontWeight: "bold",
                          color: "black",
                          padding: 5,
                        }}
                      >
                        {hoveredCardIndex === index
                          ? item.Details
                          : item.subTitle}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </Transitioning.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 240,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Added marginBottom to separate cards vertically
  },
  hoveredCard: {
    backgroundColor: "#e0e0e0",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  hoveredText: {
    color: "white",
  },
});

export default Service;
