import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePicker from "react-native-image-crop-picker";
import GetLocation from "react-native-get-location";

import { colors } from "../config/colors";
import { hp } from "../config/HeightWidth";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Icons from "../config/Icons";
import AppButton from "../components/AppButton";
import { updateUserData } from "../store/auth/authAction";
import { storage } from "../firebase";

const EditScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector((state) => state.authReducer);
  const [profileImage, setProfileImage] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      compressImageQuality: 0.2,
      cropping: true,
    }).then((image) => {
      Platform.OS === "ios"
        ? setProfileImage(image.sourceURL)
        : setProfileImage(image.path);
    });
  };

  const changeCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15000,
    })
      .then((location) => {
        setCurrentLocation(() => ({
          latitude: location.latitude,
          longitude: location.longitude,
        }));
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  const handleSubmit = async (data) => {
    data.id = userData.id;
    data.userCurrentLocation = currentLocation
      ? currentLocation
      : userData.userCurrentLocation;
    data.gender = userData.gender;

    await dispatch(updateUserData(data, profileImage, navigation));
    console.log("after dispatch");
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAwareScrollView>
        <TouchableOpacity onPress={imagePicker} style={styles.selectImage}>
          {!userData?.profileImage &&
            !profileImage &&
            Icons.fontAwesomeIcons("camera", 26)}
          {(profileImage || userData.profileImage) && (
            <Image
              source={{
                uri: profileImage ? profileImage : userData.profileImage,
              }}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
        <AppForm
          initialValue={{
            username: userData.username,
            fullName: userData.fullName,
            age: userData.age,
            country: userData.country,
            state: userData.state,
            city: userData.city,
            password: userData.password,
          }}
          onSubmit={(values) => handleSubmit(values)}
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
            secureTextEntry
            icon={Icons.materialCommunityIcons("lock")}
          />
          <SubmitButton title='Save' isLoading={isLoading} />
        </AppForm>
      </KeyboardAwareScrollView>

      {!currentLocation && (
        <Text
          style={styles.currentLocation}
        >{`${userData.userCurrentLocation.latitude}, ${userData.userCurrentLocation.longitude}`}</Text>
      )}
      {currentLocation && (
        <Text
          style={styles.currentLocation}
        >{`${currentLocation.latitude}, ${currentLocation.longitude}`}</Text>
      )}
      <View style={styles.getLocationButtonView}>
        <AppButton
          title='Change Your Current Location'
          onPress={changeCurrentLocation}
          color='secondary'
          style={styles.buttonGetLocation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
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

  image: {
    width: "100%",
    height: "100%",
  },

  currentLocation: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },

  getLocationButtonView: {
    height: hp("10%"),
  },

  buttonGetLocation: {
    padding: 10,
  },
});

export default EditScreen;
