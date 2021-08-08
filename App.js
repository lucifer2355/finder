import React from "react";
import { StyleSheet } from "react-native";

import AppNavigator from "./src/navigations/AppNavigator";

const App = () => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
