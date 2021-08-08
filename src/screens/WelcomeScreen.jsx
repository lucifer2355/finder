import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => console.log("login")} />
        <AppButton
          title='Create Account'
          color='blueLight'
          onPress={() => console.log("create account")}
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
