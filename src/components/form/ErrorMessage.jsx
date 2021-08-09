import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 18,
  },
});

export default ErrorMessage;
