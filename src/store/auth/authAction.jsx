import db from "../../firebase";
import { removeItem, setItem } from "../../utils/Storage";
import {
  LOGIN_START,
  LOGIN_COMPLETE,
  LOGIN_FAILED,
  REGISTRATION_START,
  REGISTRATION_COMPLETE,
  REGISTRATION_FAILED,
  STORE_USER_DATA,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_COMPLETE,
  UPDATE_USER_DATA_FAILED,
  LOGOUT,
} from "./types";

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_START });

  try {
    await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const data = snapshot.data();
          const id = snapshot.id;

          if (data.username === username && data.password === password) {
            data.id = id;
            setItem("userData", data);
            dispatch({ type: LOGIN_COMPLETE, payload: data });
          }
        });
      });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
    console.log("Error in login action", error);
  }
};

export const register =
  (userInfo, gender, userCurrentLocation) => async (dispatch) => {
    dispatch({ type: REGISTRATION_START });
    try {
      await db.collection("users").add({
        username: userInfo.username,
        fullName: userInfo.fullName,
        age: userInfo.age,
        country: userInfo.country,
        state: userInfo.state,
        city: userInfo.city,
        gender,
        password: userInfo.password,
        userCurrentLocation,
      });
      dispatch({ type: REGISTRATION_COMPLETE });

      dispatch(login(userInfo.username, userInfo.password));
    } catch (error) {
      dispatch({ type: REGISTRATION_FAILED });
      console.log("Error in creating new user", error);
    }
  };

export const logout = () => async (dispatch) => {
  await removeItem("userData");
  dispatch({ type: LOGOUT });
};

export const storeUserData = (userData) => async (dispatch) => {
  dispatch({ type: STORE_USER_DATA, payload: JSON.parse(userData) });
};

export const updateUserData = (userData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_DATA_START });
  try {
    await db.collection("users").doc(userData.id).set({
      username: userData.username,
      fullName: userData.fullName,
      age: userData.age,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      userCurrentLocation: userData.userCurrentLocation,
      password: userData.password,
      gender: userData.gender,
    });

    dispatch({ type: UPDATE_USER_DATA_COMPLETE, payload: userData });
  } catch (error) {
    dispatch({ type: UPDATE_USER_DATA_FAILED });
    console.log("Error in update user data", error);
  }
};
