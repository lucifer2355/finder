import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { colors } from "../config/colors";
import { hp, wp } from "../config/HeightWidth";
import Icons from "../config/Icons";

const ChatScreen = ({ navigation }) => {
  const sendMessage = () => {
    console.log("send message");
  };

  useLayoutEffect(() => {}, []);

  return (
    <KeyboardAwareScrollView
      keyboardDismissMode='on-drag'
      contentContainerStyle={styles.screen}
      extraScrollHeight={10}
    >
      <View style={styles.chat}></View>
      <View style={styles.textInputView}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TextInput placeholder='Type a message' style={styles.textInput} />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            {Icons.materialCommunityIcons("send", 30)}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    marginBottom: 10,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    width: wp("82%"),
  },

  sendButton: {
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
