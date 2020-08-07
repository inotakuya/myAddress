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
    selectAddresses(getters.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc =>
          commit("addAddress", { id: doc.id, address: doc.data() })
        );
      });
  },
  addAddress({ getters, commit }, address) {
    if (!getters.isUser) {
      // ユーザー情報が取得できない場合は、何もしない
      return;
    }
    selectAddresses(getters.uid)
      .add(address)
      .then(doc => {
        commit("addAddress", { id: doc.id, address });
      });
  },
  deleteAddresses({ commit }) {
    commit("deleteAddresses");
  }
};

// 連絡先一覧を取得
function selectAddresses(uid) {
  const url = `users/${uid}/addresses`;
  return firebase.firestore().collection(url);
}

export default {
  state,
  getters,
  mutations,
  actions
};
