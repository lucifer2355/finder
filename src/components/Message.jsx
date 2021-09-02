import React from "react";
import { View, Text } from "react-native";

const Message = ({ user, message }) => {
  console.log(message);
  return (
    <View>
      <Text>{message.messageText}</Text>
    </View>
  );
};

export default Message;
