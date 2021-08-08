import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name='Search' component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
