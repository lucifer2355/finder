import React from "react";
import { View, Text } from "react-native";

const Message = ({ user, message }) => {
  return (
    <View>
      <Text>{message.message}</Text>
    </View>
  );
};

export default Message;
