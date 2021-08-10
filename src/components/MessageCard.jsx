import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { hp, wp } from "../config/HeightWidth";
import { colors } from "../config/colors";

const MessageCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/profile.jpeg")}
        resizeMode='contain'
        style={styles.image}
      />

      <View style={styles.userInfo}>
        <Text style={styles.title}>Full Name</Text>

        <View style={styles.subTitleView}>
          <Text style={styles.subTitleText}>22 yrs.</Text>
          <Text style={styles.subTitleText}>Bhavnagar, Gujarat, India</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },

  userInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  subTitleView: {
    flexDirection: "row",
  },

  subTitleText: {
    fontSize: 14,
    marginRight: 8,
  },
});

export default MessageCard;
