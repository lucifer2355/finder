import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Yup from "yup";

import { colors } from "../config/colors";
// import { Icons } from "../../assets/icons/Icons";
import Icons from "../config/Icons";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  fullName: Yup.string().required().label("Full Name"),
  age: Yup.string().required().label("Age"),
  countryFrom: Yup.string().required().label("Country"),
  stateFrom: Yup.string().required().label("State"),
  cityFrom: Yup.string().required().label("City"),
  gender: Yup.string().required().label("Gender"),
  password: Yup.string().required().label("Password"),
});

const RegistrationScreen = ({ navigation }) => {
  const handleSubmit = () => {
    console.log("Create user");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      style={styles.screen}
    >
      <AppForm
        initialValue={{
          username: "",
          fullName: "",
          age: "",
          countryFrom: "",
          stateFrom: "",
          cityFrom: "",
          gender: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name='username'
          placeholder='Username'
          icon={Icons.materialCommunityIcons("card")}
        />
        <AppFormField
          name='fullName'
          placeholder='Full Name'
          icon={Icons.materialCommunityIcons("card")}
        />
        <AppFormField
          name='age'
          placeholder='Age'
          icon={
            <Icon
              name='user'
              style={styles.icon}
              size={24}
              color={colors.white}
            />
          }
        />
      </AppForm>
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
