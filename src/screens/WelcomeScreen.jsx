import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
        <AppButton
          title='Create Account'
          color='blueLight'
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    padding: 25,
  },
});

export default WelcomeScreen;
