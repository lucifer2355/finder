import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Chat Screen</Text>
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

export default ChatScreen;
