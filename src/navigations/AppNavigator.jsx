import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "../config/colors";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import NotificationNavigator from "./NotificationNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={colors.white}
      barStyle={{ backgroundColor: colors.primary }}
    >
      <Tab.Screen
        name='HomeNavigator'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={26} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name='SearchNavigator'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' color={color} size={26} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name='NotificationNavigator'
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='notifications' color={color} size={26} />
          ),
          tabBarLabel: "Notification",
        }}
      />
      <Tab.Screen
        name='ProfileNavigator'
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='account' color={color} size={26} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
