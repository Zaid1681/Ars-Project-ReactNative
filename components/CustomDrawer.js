import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#Fed276" }}>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{ backgroundColor: "#F5F5F4=%" }}
      >
        <ImageBackground
          source={require("../assets/1.jpg")}
          //   style={{ padding: 2, height: 150, opacity: 0.5 }}
          style={styles.container}
        ></ImageBackground>
        {/* <View style={styles.overlay}></View> */}
        <View
          style={{
            zIndex: 10,
            top: 10,
            position: "absolute",
            justifyContent: "center",
            // alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../assets/arsImg.jpg")}
            style={{
              width: 140,
              height: 70,
              borderRadius: 10,
              marginHorizontal: 45,
              //   flex: 1,

              marginVertical: 20,
              //   top: 0,
              //   zIndex: 10,
            }}
          />
          <Text style={styles.drawerTitle}>Ars Energy Solution</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* <Text>CustomDrawer</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // position: "absolute",
    height: 200,
    opacity: 0.6,
    zIndex: -1,
    left: 0,
    top: 0,
  },
  overlay: {
    backgroundColor: "transparent",
    opacity: 1,
  },
  avatarStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 50,
    alignSelf: "center",
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
  balanceContainer: {
    padding: 10,
  },
  drawerTitle: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    // fontWeight: 1000,
  },
});

export default CustomDrawer;
