import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProfilePicture from "react-native-profile-picture";

import { getItem } from "../utils/Storage";
import { hp } from "../config/HeightWidth";
import Icons from "../config/Icons";
import ListingItem from "../components/ListingItem";
import { colors } from "../config/colors";

const ProfileScreen = () => {
  const { userData } = useSelector((state) => state.userReducer);
  const [itemList, setItemList] = useState([
    {
      id: 1,
      label: userData.gender,
      icon: Icons.fontAwesomeIcons("user"),
    },
    {
      id: 2,
      label: userData.age,
      icon: Icons.fontAwesomeIcons("user"),
    },
    {
      id: 3,
      label: `${userData.city}, ${userData.state}, ${userData.country}`,
      icon: Icons.fontAwesomeIcons("user"),
    },
    {
      id: 4,
      label: `Current Location: ${userData?.userCurrentLocation?.latitude}, ${userData?.userCurrentLocation?.longitude}`,
      icon: Icons.fontAwesomeIcons("user"),
    },
  ]);

  useEffect(() => {}, []);

  return (
    <View style={styles.screen}>
      <View style={styles.profileImage}>
        <ProfilePicture
          isPicture={false}
          user={userData.fullName}
          shape='circle'
          width={100}
          height={100}
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
      />
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
});

export default ProfileScreen;
