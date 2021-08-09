import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { colors } from "../config/colors";

const AppButton = ({
  title,
  color = "primary",
  onPress,
  style,
  isLoading = false,
}) => {
  if (isLoading)
    return (
      <ActivityIndicator
        size='large'
        color={colors.primary}
        style={{ marginTop: 5 }}
      />
    );

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], style }]}
      onPress={onPress}
      disabled={isLoading}
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
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default AppButton;
