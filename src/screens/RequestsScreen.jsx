import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RequestsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Requests Screen</Text>
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

export default RequestsScreen;
