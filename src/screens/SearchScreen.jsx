import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DropDownPicker from "react-native-dropdown-picker";

import { colors } from "../config/colors";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Icons from "../config/Icons";

const SearchScreen = () => {
  const radio_props = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [gender, setGender] = useState("male");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [age, setAge] = useState("20 - 23");
  const [items, setItems] = useState([
    { label: "20 - 23", value: "20 - 23" },
    { label: "24 - 27", value: "24 - 27" },
    { label: "28 - 34", value: "28 - 34" },
  ]);

  const handleSubmit = () => {
    console.log("search");
  };

  return (
    <View style={styles.screen}>
      <AppForm
        initialValue={{ country: "", state: "", city: "" }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          autoCapitalize='words'
          autoCorrect={false}
          name='city'
          placeholder='City'
          icon={Icons.materialCommunityIcons("city")}
        />
        <AppFormField
          autoCapitalize='words'
          autoCorrect={false}
          name='state'
          placeholder='State'
          icon={Icons.fontAwesomeIcons("flag")}
        />
        <AppFormField
          autoCapitalize='words'
          autoCorrect={false}
          name='country'
          placeholder='Country'
          icon={Icons.materialCommunityIcons("flag")}
        />
        <DropDownPicker
          open={openDropDown}
          value={age}
          items={items}
          setOpen={setOpenDropDown}
          setValue={setAge}
          setItems={setItems}
          labelStyle={styles.dropDownLabelStyle}
          style={styles.dropDown}
          containerStyle={{ marginTop: 5 }}
        />

        <Text style={styles.radioTitle}>What person are you looking for?</Text>
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

        <SubmitButton title='Search' />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },

  dropDown: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 25,
    paddingHorizontal: 25,
  },

  dropDownLabelStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },

  radioTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },

  radioButtonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },

  radioButton: {
    width: "30%",
  },

  radioButtonLabelStyle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SearchScreen;
