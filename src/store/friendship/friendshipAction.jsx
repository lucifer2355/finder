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

export const deleteRequest =
  (loginUserId, deleteRequestId) => async (dispatch) => {
    try {
      await db
        .collection("friendship")
        .doc(loginUserId)
        .collection("sentRequest")
        .delete({
          userId: deleteRequestId,
        });
      await db
        .collection("friendship")
        .doc(deleteRequestId)
        .collection("receiveRequest")
        .delete({
          userId: loginUserId,
        });
    } catch (error) {
      console.log("Error in delete request", error);
    }
  };

export const acceptRequest =
  (loginUserId, acceptRequestId) => async (dispatch) => {
    try {
      await db
        .collection("friendship")
        .doc(loginUserId)
        .collection("friends")
        .add({
          userId: acceptRequest,
        });
      await db
        .collection("friendship")
        .doc(acceptRequestId)
        .collection("friends")
        .add({
          userId: loginUserId,
        });
      dispatch(deleteRequest(loginUserId, acceptRequestId));
    } catch (error) {}
  };
