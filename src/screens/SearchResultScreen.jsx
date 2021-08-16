import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import SvgUri from "react-native-svg-uri";
import { ListItem, Avatar } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";

import { colors } from "../config/colors";
import { db } from "../firebase";
import {
  getSentRequests,
  sentRequest,
} from "../store/friendship/friendshipAction";

const SearchResultScreen = () => {
  const dispatch = useDispatch();
  const { searchResult } = useSelector((state) => state.searchReducer);
  const { userData } = useSelector((state) => state.authReducer);

  if (searchResult.length === 0) {
    return (
      <SvgUri
        width='100%'
        height='100%'
        source={require("../../assets/svg/noData.svg")}
      />
    );
  }

  const fetchSentRequests = async () => {
    await dispatch(getSentRequests(userData.id));
  };

  const handleSentRequest = async (receiverUserId) => {
    await dispatch(sentRequest(userData.id, receiverUserId));
  };

  useEffect(() => {
    fetchSentRequests();
  }, []);

  return (
    <View>
      {searchResult.map((s) => (
        <ListItem key={s.id} bottomDivider>
          <Avatar
            rounded
            size={50}
            icon={{ name: "user", color: "orange", type: "font-awesome" }}
            source={{
              uri: s?.profileImage,
            }}
            containerStyle={{ borderColor: colors.primary, borderWidth: 1 }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{s.fullName}</ListItem.Title>
            <ListItem.Subtitle>{`${s.age} Years, ${s.city}, ${s.state}, ${s.country}`}</ListItem.Subtitle>
          </ListItem.Content>
          <AntDesign
            name='pluscircleo'
            size={28}
            color={colors.primary}
            onPress={() => handleSentRequest(s.id)}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SearchResultScreen;
