import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MessageCard from "../components/MessageCard";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <MessageCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
