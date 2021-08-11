import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListingItem = ({ iconComponent, backgroundColor, label }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconView, { backgroundColor }]}>
        {iconComponent}
      </View>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  iconView: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
  },
});

export default ListingItem;
