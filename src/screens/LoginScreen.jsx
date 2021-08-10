import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form";
import { wp } from "../config/HeightWidth";
import Icons from "../config/Icons";
import db from "../firebase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      blurRadius={7}
      style={styles.screen}
    >
      <AppForm
        initialValue={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='username'
          placeholder='Username'
          icon={Icons.fontAwesomeIcons("user")}
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='password'
          placeholder='Password'
          icon={Icons.fontAwesomeIcons("lock")}
        />

        <SubmitButton title='Login' isLoading={isLoading} />
      </AppForm>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default LoginScreen;
