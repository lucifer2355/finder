import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.chatInput}>
        <TextInput placeholder='Type a message' />
      </View>
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
