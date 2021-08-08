import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name='Profile' component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
