import React from "react";
import { StyleSheet } from "react-native";

import AppNavigator from "./src/navigations/AppNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";

const App = () => {
  return <AuthNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
