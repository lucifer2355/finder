import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ListItem, Avatar } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import SvgUri from "react-native-svg-uri";

import { colors } from "../config/colors";
import {
  getReceivedRequests,
  deleteReceivedRequest,
  acceptRequest,
} from "../store/friendship/friendshipAction";

const RequestsScreen = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const { receiveRequests } = useSelector((state) => state.friendshipReducer);

  const fetchReceiveRequests = async () => {
    await dispatch(getReceivedRequests(userData.id));
  };

  const handleDeleteRequest = async (id) => {
    await dispatch(deleteReceivedRequest(userData.id, id));
  };

  const handleAcceptRequest = async (id) => {
    await dispatch(acceptRequest(userData.id, id));
  };

  useEffect(() => {
    fetchReceiveRequests();
  }, []);

  if (receiveRequests.length === 0) {
    return (
      <SvgUri
        width='100%'
        height='100%'
        source={require("../../assets/svg/noData.svg")}
      />
    );
  }

  return (
    <View style={styles.screen}>
      {receiveRequests.map((r) => (
        <ListItem key={r.id} bottomDivider>
          <Avatar
            rounded
            size={50}
            icon={{ name: "user", color: "orange", type: "font-awesome" }}
            source={{
              uri: r?.profileImage,
            }}
            containerStyle={{ borderColor: colors.primary, borderWidth: 1 }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{r.fullName}</ListItem.Title>
            <ListItem.Subtitle>{`${r.age} Years, ${r.city}, ${r.state}, ${r.country}`}</ListItem.Subtitle>
          </ListItem.Content>

          <View style={styles.buttonContainer}>
            <Entypo
              name='circle-with-cross'
              size={26}
              color={colors.primary}
              style={styles.icon}
              onPress={() => handleDeleteRequest(r.id)}
            />

            <AntDesign
              name='checkcircle'
              size={23}
              color={colors.primary}
              style={styles.icon}
              onPress={() => handleAcceptRequest(r.id)}
            />
          </View>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginHorizontal: 2,
  },
});

export default RequestsScreen;
