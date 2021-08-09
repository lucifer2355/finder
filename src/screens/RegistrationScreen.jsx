import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import * as Yup from "yup";

import { colors } from "../config/colors";
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
  var radio_props = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [gender, setGender] = useState("male");

  const handleSubmit = () => {
    console.log("Create user");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/street.jpeg")}
      blurRadius={4}
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
          icon={Icons.fontAwesomeIcons("user")}
        />
        <AppFormField
          name='fullName'
          placeholder='Full Name'
          icon={Icons.fontAwesomeIcons("vcard")}
        />
        <AppFormField
          name='age'
          placeholder='Age'
          icon={Icons.materialCommunityIcons("walk")}
        />
        <AppFormField
          name='countryFrom'
          placeholder='Which country you are from?'
          icon={Icons.materialCommunityIcons("flag")}
        />
        <AppFormField
          name='stateFrom'
          placeholder='Which state you are from?'
          icon={Icons.materialCommunityIcons("flag")}
        />
        <AppFormField
          name='cityFrom'
          placeholder='Which city you are from?'
          icon={Icons.materialCommunityIcons("city")}
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
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              </View>
            ))}
          </RadioForm>
        </View>
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

  radioButtonContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 5,
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
