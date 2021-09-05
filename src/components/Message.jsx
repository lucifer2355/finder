import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";

import { wp } from "../config/HeightWidth";
import { colors } from "../config/colors";

const Message = ({ user, message }) => {
  const {
    userData: { id },
  } = useSelector((state) => state.authReducer);
  const [isSender, setIsSender] = useState(id === message.user);

  return (
    <View
      style={[
        styles.senderMsgView,
        isSender
          ? { alignSelf: "flex-end", backgroundColor: colors.primary }
          : { alignSelf: "flex-start", backgroundColor: colors.gray },
      ]}
    >
      <Text
        style={[
          styles.msgText,
          isSender ? { color: colors.black } : { color: colors.white },
        ]}
      >
        {message.message}
      </Text>
      <Text
        style={[
          styles.msgTime,
          isSender ? { color: colors.black } : { color: colors.white },
        ]}
      >
        {moment(message.timestamp).format("DD/MM, hA")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  senderMsgView: {
    width: wp("35%"),
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 2,
    marginHorizontal: 5,
  },

  msgText: {
    fontSize: 18,
    fontWeight: "600",
  },

  msgTime: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
});

export default Message;
