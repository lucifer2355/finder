import db from "../../firebase";
import { setItem } from "../../utils/Storage";
import { LOGIN_START, LOGIN_COMPLETE, LOGIN_FAILED } from "./types";

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_START });

  try {
    await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const data = snapshot.data();
          const id = snapshot.id();

          console.log(id);

          if (data.username === username && data.password === password) {
            dispatch({ type: LOGIN_COMPLETE, payload: data });
          }
        });
      });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
    console.log("Error in login action", error);
  }
};
