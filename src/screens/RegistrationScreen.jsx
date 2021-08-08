import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Create Account",
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Registration Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegistrationScreen;
