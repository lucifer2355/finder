import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import ProfileScreen from "../screens/ProfileScreen";
import EditScreen from "../screens/EditScreen";

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
    <Stack.Screen name='Edit' component={EditScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
