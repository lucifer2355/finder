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
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();
            if (data.userId === deleteRequestId) {
              snapshot.ref.delete();
              return;
            }
          });
        });
      await db
        .collection("friendship")
        .doc(deleteRequestId)
        .collection("receiveRequest")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((snapshot) => {
            const data = snapshot.data();
            if (data.userId === loginUserId) {
              snapshot.ref.delete();
              return;
            }
          });
        });
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
      });

    dispatch({ type: GET_SENT_REQUESTS, payload: sentRequests });
  } catch (error) {
    console.log("Error in getSetRequests", error);
  }
};

const getReceivedRequestsUserId = async (loginUserId) => {
  const result = [];

  await db
    .collection("friendship")
    .doc(loginUserId)
    .collection("receiveRequest")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((snapshot) => {
        const data = snapshot.data();
        result.push(data.userId);
      });
    });

  return result;
};

export const getReceivedRequests = (loginUserId) => async (dispatch) => {
  try {
    const receivedRequests = [];

    const userIds = await getReceivedRequestsUserId(loginUserId);

    if (userIds.length > 0) {
      userIds.map(async (id) => {
        db.collection("users")
          .doc(id)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            receivedRequests.push(...[data]);
          })
          .catch((err) => {
            console.log("Error getting documents", err);
          });
      });
    }

    dispatch({ type: GET_RECEIVE_REQUESTS, payload: receivedRequests });
  } catch (error) {
    console.log("Error in get received requests list");
  }
};
