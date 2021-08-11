import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { getItem, removeItem } from "./src/utils/Storage";
import { store } from "./src/store/store";
import { storeUserData } from "./src/store/user/userAction";
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
  const [isUserLogin, setIsUserLogin] = useState(false);

  const getUserData = async () => {
    const userData = await getItem("userData");

    if (userData) {
      setIsUserLogin(true);
      await dispatch(storeUserData(userData));
    } else setIsUserLogin(false);
  };

  useEffect(() => {
    getUserData();
    // removeItem("userData");
  }, []);

  return (
    <NavigationContainer>
      {isUserLogin || userData ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppWrapper;
