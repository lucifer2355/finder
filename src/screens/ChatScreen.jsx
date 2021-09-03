import React, { useLayoutEffect, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import firebase from "firebase";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "../config/colors";
import { hp, wp } from "../config/HeightWidth";
import { db } from "../firebase";
import Icons from "../config/Icons";
import AppTextInput from "../components/AppTextInput";
import DisplayChats from "../components/DisplayChats";

const ChatScreen = ({ navigation, route }) => {
  const { userData } = useSelector((state) => state.authReducer);
  const [recipientId, setRecipientId] = useState(route.params.recipientId);
  const [friendshipId, setFriendshipId] = useState(route.params.friendshipId);
  const [messageText, setMessageText] = useState("");
  const [chat, setChat] = useState();
  const [messages, setMessages] = useState();

  const sendMessage = async () => {
    await db.collection("chats").doc(friendshipId).collection("messages").add({
      message: messageText,
      user: userData.id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessageText("");
  };

  useEffect(() => {
    (() => {
      const chatRef = db.collection("chats").doc(friendshipId);
      chatRef.get().then(async (docSnapshot) => {
        if (docSnapshot.exists) {
          const messagesRef = await chatRef
            .collection("messages")
            .orderBy("timestamp", "asc")
            .get();
          const messages = messagesRef.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .map((messages) => ({
              ...messages,
              timestamp: messages.timestamp.toDate().getTime(),
            }));

          const chatRes = await chatRef.get();
          const chat = {
            id: chatRes.id,
            ...chatRes.data(),
          };

          setChat(chat);
          setMessages(messages);
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
      <View style={styles.chat}>
        <DisplayChats
          chat={chat}
          messages={messages}
          friendshipId={friendshipId}
        />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.textInputView}>
          <AppTextInput
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            placeholder='Type a message'
            width='84%'
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={
              !messageText
                ? [styles.sendButton, { opacity: 0.6 }]
                : styles.sendButton
            }
            disabled={!messageText}
          >
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
