import React, { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../config/colors";
import { hp } from "../config/HeightWidth";
import { logout } from "../store/auth/authAction";
import Icons from "../config/Icons";
import ListingItem from "../components/ListingItem";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const [itemList, setItemList] = useState([
    {
      id: 5,
      label: userData.username,
      icon: Icons.fontAwesomeIcons("user", 20),
    },
    {
      id: 2,
      label: `${userData.age} Years Old`,
      icon: Icons.materialCommunityIcons("walk", 20),
    },
    {
      id: 3,
      label: `${userData.city}, ${userData.state}, ${userData.country}`,
      icon: Icons.materialCommunityIcons("city", 20),
    },
    {
      id: 4,
      label: `Current Location: ${userData?.userCurrentLocation?.latitude}, ${userData?.userCurrentLocation?.longitude}`,
      icon: Icons.ioniconsIcons("location", 20),
    },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name='account-edit'
          size={26}
          color={colors.white}
          onPress={() => navigation.navigate("Edit")}
        />
      ),
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={styles.screen}>
      <View style={styles.profileImage}>
        <Avatar
          rounded
          size={120}
          icon={{ name: "user", color: "orange", type: "font-awesome" }}
          source={{
            uri: userData?.profileImage,
          }}
          containerStyle={{ borderColor: colors.primary, borderWidth: 1 }}
        />
        <Text style={styles.userName}>{userData.fullName}</Text>
      </View>

      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingItem
            iconComponent={item.icon}
            backgroundColor={colors.pink}
            label={item.label}
          />
        )}
        contentContainerStyle={styles.listingView}
      />

      <View style={{ paddingBottom: hp("1%") }}>
        <ListingItem
          label='Logout'
          iconComponent={Icons.materialCommunityIcons("logout", 20)}
          backgroundColor={colors.pink}
          onPress={() => dispatch(logout())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  profileImage: {
    alignItems: "center",
    marginTop: hp("2%"),
  },

  userName: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: "bold",
  },

  listingView: {
    marginTop: hp("5%"),
  },
});

export default ProfileScreen;
