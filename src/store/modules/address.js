import firebase from "firebase/app";
import "firebase/firestore";

const state = {
  addresses: []
};
const getters = {
  addresses: state => state.addresses
};
const mutations = {
  addAddress(state, { id, address }) {
    address.id = id;
    state.addresses.push(address);
  }
};
const actions = {
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
