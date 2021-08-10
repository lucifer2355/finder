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
import { setItem } from "../utils/Storage";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    try {
      await db
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();

            if (data.username === username && data.password === password)
              setItem("userData", data);
          });
        });

      setIsLoginFail(true);
    } catch (error) {
      console.log("Error in login action", error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      blurRadius={7}
      style={styles.screen}
    >
      {isLoginFail && (
        <Text style={styles.errorText}>Username & Password not match</Text>
      )}
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
