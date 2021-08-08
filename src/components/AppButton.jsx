import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "../config/colors";

const AppButton = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },

  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;