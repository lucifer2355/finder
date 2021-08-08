import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { colors } from "../config/colors";
import { hp } from "../config/HeightWidth";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.jpeg")}
      blurRadius={7}
      style={styles.screen}
    >
      <Text style={styles.text}>Meet New People</Text>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
        <AppButton
          title='Create Account'
          color='blueLight'
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  text: {
    position: "absolute",
    top: hp("25%"),
    color: colors.black,
    fontSize: 26,
    fontWeight: "bold",
  },

  buttonContainer: {
    width: "100%",
    padding: 25,
  },
});

export default WelcomeScreen;
