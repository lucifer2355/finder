import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search' component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchNavigator;
