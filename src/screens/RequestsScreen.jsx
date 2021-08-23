import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ListItem, Avatar } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import SvgUri from "react-native-svg-uri";

import { colors } from "../config/colors";
import { getReceivedRequests } from "../store/friendship/friendshipAction";

const RequestsScreen = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const { receiveRequests } = useSelector((state) => state.friendshipReducer);

  console.log("screen REse", receiveRequests);

  const fetchReceiveRequests = async () => {
    await dispatch(getReceivedRequests(userData.id));
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

          <AntDesign
            name='pluscircleo'
            size={28}
            color={colors.primary}
            onPress={() => console.log("hllo")}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RequestsScreen;
