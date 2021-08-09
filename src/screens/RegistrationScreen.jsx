import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { colors } from "../config/colors";
import AppTextInput from "../components/AppTextInput";

const RegistrationScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      style={styles.screen}
    >
      <AppTextInput
        icon={
          <Icon
            name='user'
            style={styles.icon}
            size={24}
            color={colors.white}
          />
        }
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  icon: {
    marginRight: 15,
  },
});

export default RegistrationScreen;
