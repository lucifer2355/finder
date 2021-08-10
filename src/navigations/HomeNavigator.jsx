import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import HomeScreen from "../screens/HomeScreen";

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
  </Stack.Navigator>
);

export default HomeNavigator;
