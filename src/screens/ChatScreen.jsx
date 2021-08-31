import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { hp } from "../config/HeightWidth";

const ChatScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.chat}></View>
      <View style={styles.textInputView}>
        <TextInput placeholder='Type a message' style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  chat: {
    flex: 0.9,
  },

  textInputView: {
    flex: 0.1,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    bottom: hp("1%"),
  },
});

export default ChatScreen;
