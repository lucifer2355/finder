import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { getItem } from "./src/utils/Storage";
import { store } from "./src/store/store";
import { storeUserData } from "./src/store/auth/authAction";
import AppNavigator from "./src/navigations/AppNavigator";
import AuthNavigator from "./src/navigations/AuthNavigator";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);

  const getUserData = async () => {
    const userData = await getItem("userData");
    if (userData) await dispatch(storeUserData(userData));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <NavigationContainer>
      {userData ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppWrapper;
