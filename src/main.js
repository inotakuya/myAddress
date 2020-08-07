import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAuBuQ8nt8siXNaBrnbD4ya7o1lt-KItyQ",
  authDomain: "my-address-pj-9fe0d.firebaseapp.com",
  databaseURL: "https://my-address-pj-9fe0d.firebaseio.com",
  projectId: "my-address-pj-9fe0d",
  storageBucket: "my-address-pj-9fe0d.appspot.com",
  messagingSenderId: "1093882790733",
  appId: "1:1093882790733:web:0d2476ae16197d72152d04",
  measurementId: "G-P5CFKMDMNM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
