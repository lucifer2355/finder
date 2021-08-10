import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form";
import { wp } from "../config/HeightWidth";
import Icons from "../config/Icons";
import { login } from "../store/auth/authAction";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);

  const handleSubmit = async ({ username, password }) => {
    await dispatch(login(username, password));
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
          secureTextEntry
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
    paddingHorizontal: 15,
    paddingTop: wp("10%"),
  },

  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
});

export default LoginScreen;
