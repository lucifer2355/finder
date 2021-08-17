import {
  SENT_REQUEST,
  DELETE_SENT_REQUEST,
  DELETE_RECEIVED_REQUEST,
  ACCEPT_REQUEST,
  GET_SENT_REQUESTS,
  GET_RECEIVE_REQUESTS,
  GET_FRIENDS_LIST,
} from "./types";
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

      dispatch({ type: SENT_REQUEST, payload: receiverUserId });
    } catch (error) {
      console.log("Error in sent request", error);
    }
  };

export const deleteSentRequest =
  (loginUserId, deleteRequestId) => async (dispatch) => {
    try {
      await db
        .collection("friendship")
        .doc(loginUserId)
        .collection("sentRequest")
        .doc(deleteRequestId)
        .delete();
      await db
        .collection("friendship")
        .doc(deleteRequestId)
        .collection("receiveRequest")
        .doc(loginUserId)
        .delete();
      dispatch({ type: DELETE_SENT_REQUEST, payload: deleteRequestId });
    } catch (error) {
      console.log("Error in delete request", error);
    }
  };

export const deleteReceivedRequest =
  (loginUserId, deleteRequestId) => async (dispatch) => {
    try {
      await db
        .collection("friendship")
        .doc(loginUserId)
        .collection("receiveRequest")
        .doc(deleteRequestId)
        .delete();
      await db
        .collection("friendship")
        .doc(deleteRequestId)
        .collection("sentRequest")
        .doc(loginUserId)
        .delete();
      dispatch({ type: DELETE_RECEIVED_REQUEST, payload: deleteRequestId });
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

      dispatch({ type: ACCEPT_REQUEST, payload: acceptRequestId });
    } catch (error) {}
  };

export const getSentRequests = (loginUserId) => async (dispatch) => {
  try {
    const sentRequests = [];
    await db
      .collection("friendship")
      .doc(loginUserId)
      .collection("sentRequest")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          const data = snapshot.data();
          sentRequests.push(data.userId);
        });
      })
      .then((sentRequests) => console.log("hello", sentRequests));

    dispatch({ type: GET_SENT_REQUESTS, payload: sentRequests });
  } catch (error) {
    console.log("Error in getSetRequests", error);
  }
};
