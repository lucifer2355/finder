import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import Message from "./Message";

const DisplayChats = ({ chat, messages, friendshipId }) => {
  // const [messagesSnapshot] = useCollection(
  //   db
  //     .collection("chats")
  //     .doc(friendshipId)
  //     .collection("messages")
  //     .orderBy("timestamp", "asc")
  // );

  const showMessages = () => {
    if (messages) {
      return messages.map((message) => (
        <Message
          key={message.id}
          user={message.user}
          message={{
            messageText: message.message,
            timeStamp: message.timestamp,
          }}
        />
      ));
    }
  };

  return <View>{showMessages()}</View>;
};

const styles = StyleSheet.create({});

export default DisplayChats;
