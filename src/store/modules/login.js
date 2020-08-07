import firebase from "firebase/app";
import "firebase/auth";

const state = {
  loginUser: null
};

const getters = {
  // ユーザー名を取得
  userName: state => (state.loginUser ? state.loginUser.displayName : ""),
  // プロフィール社員のURLを取得
  photoURL: state => (state.loginUser ? state.loginUser.photoURL : "")
};

const mutations = {
  // ログイン情報を設定
  setLoginUser(state, user) {
    state.loginUser = user;
  }
};

const actions = {
  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    // グーグルアカウントでログインする
    firebase.auth().signInWithRedirect(googleAuthProvider);
  },
  setLoginUser({ commit }, user) {
    commit("setLoginUser", user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
