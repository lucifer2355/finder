import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../config/colors";
import HomeNavigator from "./HomeNavigator";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.white,
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
