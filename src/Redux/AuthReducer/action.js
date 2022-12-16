import * as types from "./actionTypes";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signInWithGoogle = (auth, provider) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: user,
      });
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      dispatch({
        type: types.LOGIN_FAILURE,
      });
    });
};
