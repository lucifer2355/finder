import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Chat' component={ChatScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
