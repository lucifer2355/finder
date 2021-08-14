import { SEARCH_START, SEARCH_COMPLETE, SEARCH_FAILED } from "./types";
import { db } from "../../firebase";

export const search =
  (placeInfo, age, gender, loginUserId) => async (dispatch) => {
    dispatch({ type: SEARCH_START });
    try {
      const searchResult = [];
      await db
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();
            const id = snapshot.id;

            if (
              (data.city === placeInfo.city ||
                data.state === placeInfo?.state ||
                data.country === placeInfo?.country) &&
              id !== loginUserId &&
              data.gender === gender
            ) {
              data.id = id;
              searchResult.push(data);
            }
          });
        });
      dispatch({ type: SEARCH_COMPLETE, payload: searchResult });
    } catch (error) {
      dispatch({ type: SEARCH_FAILED });
      console.log("Error in search", error);
    }
  };
