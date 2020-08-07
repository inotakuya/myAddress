import firebase from 'firebase/app'
import "firebase/auth";

const actions = {
  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider
    firebase.auth().signInWithRedirect(googleAuthProvider);
  },
};

export default {
  actions,
};
