import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../config/colors";

const ListingItem = ({ iconComponent, backgroundColor, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={label !== "Logout"}
    >
      <View style={[styles.iconView, { backgroundColor }]}>
        {iconComponent}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.transparentBlack,
  },

  iconView: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  label: {
    fontWeight: "500",
    fontSize: 14,
    textTransform: "capitalize",
  },
});

export default ListingItem;
