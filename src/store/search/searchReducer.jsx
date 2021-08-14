import { SEARCH_START, SEARCH_COMPLETE, SEARCH_FAILED } from "./types";
import { db } from "../../firebase";

export const search = (placeInfo, age, gender) => async (dispatch) => {
  dispatch({ type: SEARCH_START });
  try {
  } catch (error) {
    dispatch({ type: SEARCH_FAILED });
    console.log("Error in search", error);
  }
};
