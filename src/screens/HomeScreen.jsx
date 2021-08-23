import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import MessageCard from "../components/MessageCard";
import { getFriends } from "../store/friendship/friendshipAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friendshipReducer);
  const { userData } = useSelector((state) => state.authReducer);

  const fetchFriendsList = async () => {
    await dispatch(getFriends(userData.id));
  };

  useEffect(() => {
    fetchFriendsList();
  }, []);

  return (
    <View style={styles.screen}>
      <MessageCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
