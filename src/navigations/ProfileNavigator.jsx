import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Profile' component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
