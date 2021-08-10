import db from "../../firebase";
import { setItem } from "../../utils/Storage";
import {
  LOGIN_START,
  LOGIN_COMPLETE,
  LOGIN_FAILED,
  REGISTRATION_START,
  REGISTRATION_COMPLETE,
  REGISTRATION_FAILED,
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

      login(userInfo.userInfo, userInfo.password);
    } catch (error) {
      dispatch({ type: REGISTRATION_FAILED });
      console.log("Error in creating new user", error);
    }
  };
