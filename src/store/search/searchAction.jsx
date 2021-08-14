import { SEARCH_START, SEARCH_COMPLETE, SEARCH_FAILED } from "./types";
import { db } from "../../firebase";

export const search = (placeInfo, age, gender) => async (dispatch) => {
  dispatch({ type: SEARCH_START });
  try {
    await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const data = snapshot.data();
          const id = snapshot.id;

          if (
            (data.city === placeInfo.city ||
              data.state === placeInfo.state ||
              data.country === placeInfo.country) &&
            data.gender === gender
          ) {
            data.id = id;
            console.log(data);
          }
        });
      });
  } catch (error) {
    dispatch({ type: SEARCH_FAILED });
    console.log("Error in search", error);
  }
};
