import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "../config/colors";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <View style={{ marginRight: 15 }}>{icon}</View>}
      <TextInput
        placeholderTextColor={colors.white}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 5,
  },

  textInput: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "100%",
  },
});

export default AppTextInput;
