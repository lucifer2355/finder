import React, { useEffect, useState, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import Message from "./Message";
import { hp } from "../config/HeightWidth";

const DisplayChats = ({ chat, messages, friendshipId }) => {
  const scrollViewRef = useRef();
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
    // else {
    //   return messages.map((message) => (
    //     <Message key={message.id} user={message.user} message={message} />
    //   ));
    // }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
      style={styles.messagesView}
    >
      {showMessages()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messagesView: {
    paddingBottom: hp("10%"),
  },
});

export default DisplayChats;
