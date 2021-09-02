import React, { useLayoutEffect, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useCollection } from "react-firebase-hooks/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "../config/colors";
import { hp, wp } from "../config/HeightWidth";
import { db } from "../firebase";
import Icons from "../config/Icons";
import AppTextInput from "../components/AppTextInput";

const ChatScreen = ({ navigation, route }) => {
  const { userData } = useSelector((state) => state.authReducer);
  const [recipientId, setRecipientId] = useState(route.params.recipientId);
  const [friendshipId, setFriendshipId] = useState(route.params.friendshipId);

  const sendMessage = () => {
    console.log("send message", recipientId);
  };

  useEffect(() => {
    (() => {
      const chatRef = db.collection("chats").doc(friendshipId);
      chatRef.get().then(async (docSnapshot) => {
        if (docSnapshot.exists) {
          console.log("exist");
        } else {
          await chatRef.set({
            users: [userData.id, recipientId],
          });
        }
      });
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.recipientFullName,
      headerRight: () => (
        <View style={styles.headerButtons}>
          <Ionicons
            name='call'
            size={24}
            color={colors.white}
            onPress={() => console.log("call")}
          />
          <Ionicons
            name='videocam'
            size={24}
            color={colors.white}
            onPress={() => console.log("video call")}
          />
        </View>
      ),
    });
  }, []);

  return (
    <KeyboardAwareScrollView
      keyboardDismissMode='on-drag'
      contentContainerStyle={styles.screen}
      extraScrollHeight={20}
      keyboardOpeningTime={100}
    >
      <View style={styles.chat}></View>
      <View style={styles.bottomView}>
        <View style={styles.textInputView}>
          <AppTextInput placeholder='Type a message' width='84%' />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            {Icons.materialCommunityIcons("send", 28)}
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

  headerButtons: {
    width: wp("17%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  chat: {
    flex: 0.9,
  },

  bottomView: {
    flex: 0.1,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    marginBottom: 5,
  },

  textInputView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  textInput: {
    fontSize: 18,
  },

  sendButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
