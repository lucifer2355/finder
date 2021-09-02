import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";

const DisplayChats = ({ chat, messages, friendshipId }) => {
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(friendshipId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DisplayChats;
