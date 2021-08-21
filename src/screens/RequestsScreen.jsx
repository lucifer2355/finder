import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { colors } from "../config/colors";
import { getReceivedRequests } from "../store/friendship/friendshipAction";

const RequestsScreen = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const { receiveRequests } = useSelector((state) => state.friendshipReducer);

  const fetchReceiveRequests = async () => {
    await dispatch(getReceivedRequests(userData.id));
  };

  useEffect(() => {
    fetchReceiveRequests();
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Requests Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RequestsScreen;
