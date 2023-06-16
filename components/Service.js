import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
  StyleSheet,
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
      hoveredCardIndex === index && styles.hoveredCard,
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
          fontSize: 25,
          display: "flex",
          textAlign: "center",
          paddingVertical: 40,
        }}
      >
        Services we offer
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
                <ImageBackground
                  imageStyle={{ borderRadius: 6, resizeMode: "cover" }}
                  style={{ aspectRatio: 5 / 6, height: 200 }}
                  source={{ uri: item.image }}
                >
                  <View style={{ display: "flex", padding: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "white",
                        padding: 8,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Text>
                    <View style={getTextStyles(index)}>
                      <Text style={{ color: "white", fontSize: 15 }}>
                        {hoveredCardIndex === index
                          ? "Hovered Card"
                          : item.subTitle}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
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
    height: 200,
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
