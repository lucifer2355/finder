import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import Message from "./Message";

const DisplayChats = ({ chat, messages, friendshipId }) => {
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(friendshipId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };
  // const showMessages = () => {
  //   if (messages) {
  //     return messages.map((message) => (
  //       <Message
  //         key={message.id}
  //         user={message.user}
  //         message={{
  //           messageText: message.message,
  //           timeStamp: message.timestamp,
  //         }}
  //       />
  //     ));
  //   }
  // };

  return <View>{showMessages()}</View>;
};

const styles = StyleSheet.create({});

export default DisplayChats;
