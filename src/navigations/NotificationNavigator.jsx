import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import { colors } from "../config/colors";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Home' component={NotificationScreen} />
    <Tab.Screen name='Settings' component={NotificationScreen} />
  </Tab.Navigator>
);

export default NotificationNavigator;
