import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { colors } from "../config/colors";
import NotificationScreen from "../screens/NotificationScreen";
import RequestsScreen from "../screens/RequestsScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
      tabBarIndicatorStyle: { backgroundColor: colors.primary },
    }}
  >
    <Tab.Screen
      name='NotificationTab'
      component={NotificationScreen}
      options={{ title: "Notification" }}
    />
    <Tab.Screen
      name='RequestsTab'
      component={RequestsScreen}
      options={{ title: "Requests" }}
    />
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
