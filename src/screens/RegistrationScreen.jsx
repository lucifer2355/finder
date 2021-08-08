import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      style={styles.screen}
    >
      <Text>Registration Screen</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RegistrationScreen;
