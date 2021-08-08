import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name='Notification' component={NotificationScreen} />
  </Stack.Navigator>
);

export default NotificationNavigator;
