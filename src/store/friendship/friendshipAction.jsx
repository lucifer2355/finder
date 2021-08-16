import { SENT_REQUEST, DELETE_REQUEST, ACCEPT_REQUEST } from "./types";
import { db } from "../../firebase";

export const sentRequest =
  (loginUserId, receiverUserId) => async (dispatch) => {
    try {
      await db
        .collection("friendship")
        .doc(loginUserId)
        .collection("sentRequest")
        .add({
          userId: receiverUserId,
        });
      await db
        .collection("friendship")
        .doc(receiverUserId)
        .collection("receiveRequest")
        .add({
          userId: loginUserId,
        });

      dispatch({ type: SENT_REQUEST });
    } catch (error) {
      console.log("Error in sent request", error);
    }
  };
