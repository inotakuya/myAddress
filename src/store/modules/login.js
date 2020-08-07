import firebase from "firebase/app";
import "firebase/auth";

const state = {
  loginUser: null
};

const getters = {
  // ユーザ情報があるか判定：true 存在する、false：存在しない
  isUser: state => state.loginUser != null,
  // ユーザー名を取得
  userName: state => (state.loginUser ? state.loginUser.displayName : ""),
  // プロフィール社員のURLを取得
  photoURL: state => (state.loginUser ? state.loginUser.photoURL : "")
};

const mutations = {
  // ログイン情報を設定
  setLoginUser(state, user) {
    state.loginUser = user;
  },
  // ログイン情報を削除
  deleteLoginUser(state) {
    state.loginUser = null;
  }
};

const actions = {
  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    // グーグルアカウントでログインする
    firebase.auth().signInWithRedirect(googleAuthProvider);
  },
  logout() {
    // ログアウトする
    firebase.auth().signOut();
  },
  setLoginUser({ commit }, user) {
    commit("setLoginUser", user);
  },
  deleteLoginUser({ commit }) {
    commit("deleteLoginUser");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
