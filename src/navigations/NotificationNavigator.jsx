import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { colors } from "../config/colors";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
      tabBarIndicatorStyle: { backgroundColor: colors.primary },
    }}
  >
    <Tab.Screen name='Home' component={NotificationScreen} />
    <Tab.Screen name='Settings' component={NotificationScreen} />
  </Tab.Navigator>
);

const NotificationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name='Notification' component={TabNavigator} />
  </Stack.Navigator>
);

export default NotificationNavigator;
