import firebase from "firebase/app";
import "firebase/firestore";

const state = {
  addresses: []
};
const getters = {
  // 連絡先一覧情報を取得
  addresses: state => state.addresses
};
const mutations = {
  // 連絡先情報を追加
  addAddress(state, { id, address }) {
    address.id = id;
    state.addresses.push(address);
  },
  // 連絡先一覧情報を削除
  deleteAddresses(state) {
    state.addresses = [];
  }
};
const actions = {
  // 連絡先一覧情報を取得
  fetchAddresses({ getters, commit }) {
    const url = `users/${getters.uid}/addresses`;
    firebase
      .firestore()
      .collection(url)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc =>
          commit("addAddress", { id: doc.id, address: doc.data() })
        );
      });
  },
  deleteAddresses({ commit }) {
    commit("deleteAddresses");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
