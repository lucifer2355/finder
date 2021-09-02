import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ListItem, Avatar } from "react-native-elements";

import { colors } from "../config/colors";
import NoData from "../components/NoData";
import { getFriends } from "../store/friendship/friendshipAction";
import AppLoader from "../components/AppLoader";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friendshipReducer);
  const { userData } = useSelector((state) => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFriendsList = async () => {
    setIsLoading(true);
    await dispatch(getFriends(userData.id));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFriendsList();
  }, []);

  if (isLoading) return <AppLoader />;

  return (
    <View style={styles.screen}>
      <NoData length={friends.length} />

      {friends.map(({ user }) => (
        <ListItem
          key={user.id}
          onPress={() =>
            navigation.navigate("Chat", {
              recipientId: user.id,
              friendshipId: user.friendshipId,
              recipientFullName: user.fullName,
            })
          }
          bottomDivider
        >
          <Avatar
            rounded
            size={50}
            icon={{ name: "user", color: "orange", type: "font-awesome" }}
            source={{ uri: user?.profileImage }}
            containerStyle={{ borderColor: colors.primary, borderWidth: 1 }}
          />
          <ListItem.Content>
            <ListItem.Title>{user.fullName}</ListItem.Title>
            <ListItem.Subtitle>{`${user.age} Years, ${user.city}, ${user.state}, ${user.country}`}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
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

export default HomeScreen;
