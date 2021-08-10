import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import AppNavigator from "./src/navigations/AppNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { getItem } from "./src/utils/Storage";

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  const getUserData = async () => {
    const userData = await getItem("userData");

    if (userData) setIsUserLogin(true);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return isUserLogin ? <AppNavigator /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
