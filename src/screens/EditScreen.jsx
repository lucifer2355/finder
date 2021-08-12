import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../config/colors";
import { AppForm, AppFormField } from "../components/form";
import Icons from "../config/Icons";

const EditScreen = ({ route, navigation }) => {
  const [userData, setUserData] = useState(route.params.userData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name='check-bold'
          size={26}
          color={colors.white}
          onPress={save}
        />
      ),
    });
  }, []);

  const save = () => {
    console.log("save");
  };

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={imagePicker} style={styles.selectImage}>
        {Icons.fontAwesomeIcons("camera", 26)}
      </TouchableOpacity>
      <AppForm
        initialValue={{
          username: userData.username,
          fullName: userData.fullName,
          age: userData.age,
          country: userData.country,
          state: userData.state,
          city: userData.city,
          password: "",
        }}
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
          icon={Icons.materialCommunityIcons("walk")}
        />
        <AppFormField
          autoCapitalize='words'
          autoCorrect={false}
          name='country'
          placeholder='Country'
          icon={Icons.fontAwesomeIcons("flag")}
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
          name='city'
          placeholder='City'
          icon={Icons.materialCommunityIcons("city")}
        />
        <AppFormField
          autoCorrect={false}
          name='password'
          placeholder='Change Password'
          icon={Icons.materialCommunityIcons("lock")}
        />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },

  selectImage: {
    alignItems: "center",
    backgroundColor: colors.mediumGray,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
});

export default EditScreen;
