import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import { colors } from "../config/colors";
import { wp } from "../config/HeightWidth";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form";
import Icons from "../config/Icons";
import db from "../firebase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  fullName: Yup.string().required().label("Full Name"),
  age: Yup.string().required().label("Age"),
  country: Yup.string().required().label("Country"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  password: Yup.string().required().label("Password"),
});

const RegistrationScreen = ({ navigation }) => {
  const radio_props = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [gender, setGender] = useState("male");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (userInfo, { resetForm }) => {
    try {
      setIsLoading(true);
      await db.collection("users").add({
        username: userInfo.username,
        fullName: userInfo.fullName,
        age: userInfo.age,
        country: userInfo.country,
        state: userInfo.state,
        city: userInfo.city,
        gender,
        password: userInfo.password,
      });
      setIsLoading(false);
      resetForm();
    } catch (error) {
      console.log("Error in creating new user", error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      blurRadius={8}
      style={styles.screen}
    >
      <KeyboardAwareScrollView>
        <AppForm
          initialValue={{
            username: "",
            fullName: "",
            age: "",
            country: "",
            state: "",
            city: "",
            password: "",
          }}
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
            autoCapitalize='words'
            autoCorrect={false}
            name='fullName'
            placeholder='Full Name'
            icon={Icons.fontAwesomeIcons("vcard")}
          />
          <AppFormField
            name='age'
            placeholder='Age'
            keyboardType='number-pad'
            icon={Icons.materialCommunityIcons("walk")}
          />
          <AppFormField
            autoCapitalize='words'
            autoCorrect={false}
            name='country'
            placeholder='Which country you are from?'
            icon={Icons.materialCommunityIcons("flag")}
          />
          <AppFormField
            autoCapitalize='words'
            autoCorrect={false}
            name='state'
            placeholder='Which state you are from?'
            icon={Icons.materialCommunityIcons("flag")}
          />
          <AppFormField
            autoCapitalize='words'
            autoCorrect={false}
            name='city'
            placeholder='Which city you are from?'
            icon={Icons.materialCommunityIcons("city")}
          />
          <AppFormField
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
            icon={Icons.fontAwesomeIcons("lock")}
          />

          <View style={styles.radioButtonContainer}>
            <RadioForm formHorizontal={true} animation={true}>
              {radio_props.map((obj, i) => (
                <View style={styles.radioButton} key={obj.value}>
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      onPress={() => setGender(obj.value)}
                      isSelected={gender === obj.value}
                      buttonInnerColor={colors.primary}
                      buttonOuterColor={colors.primary}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={() => setGender(obj.value)}
                      labelStyle={styles.radioButtonLabelStyle}
                    />
                  </RadioButton>
                </View>
              ))}
            </RadioForm>
          </View>
          <SubmitButton title='Create Account' isLoading={isLoading} />
        </AppForm>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: wp("15%"),
  },

  radioButtonContainer: {
    alignItems: "center",
    marginVertical: 5,
  },

  radioButton: {
    width: "30%",
  },

  radioButtonLabelStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
