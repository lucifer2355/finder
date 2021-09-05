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
    <View style={isSender ? styles.senderMsgView : styles.receiverMsgView}>
      <Text style={styles.msgText}>{message.message}</Text>
      <Text style={styles.msgTime}>
        {moment(message.timestamp).format("DD/MM, hA")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  senderMsgView: {
    width: wp("40%"),
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 2,
    alignSelf: "flex-end",
    marginRight: 5,
  },

  msgText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "600",
  },

  msgTime: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
});

export default Message;
