import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import SvgUri from "react-native-svg-uri";
import { ListItem, Avatar } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";

import { colors } from "../config/colors";
import {
  getSentRequests,
  sentRequest,
  deleteSentRequest,
} from "../store/friendship/friendshipAction";

const SearchResultScreen = () => {
  const dispatch = useDispatch();
  const { searchResult } = useSelector((state) => state.searchReducer);
  const { userData } = useSelector((state) => state.authReducer);
  const { sentRequests } = useSelector((state) => state.friendshipReducer);

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

  const handleCancelRequest = async (loginUserId, cancelReqId) => {
    await dispatch(deleteSentRequest(loginUserId, cancelReqId));
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
          {sentRequests.length !== 0 && sentRequests.includes(s.id) ? (
            <TouchableOpacity
              onPress={() => handleCancelRequest(userData.id, s.id)}
            >
              <Text style={styles.cancelRequestText}>Cancel Req</Text>
            </TouchableOpacity>
          ) : (
            <AntDesign
              name='pluscircleo'
              size={28}
              color={colors.primary}
              onPress={() => handleSentRequest(s.id)}
            />
          )}
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

  cancelRequestText: {
    color: colors.blueLight,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default SearchResultScreen;
