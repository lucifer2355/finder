import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Notification' component={NotificationScreen} />
  </Stack.Navigator>
);

export default NotificationNavigator;
