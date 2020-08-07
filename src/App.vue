<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="isUser">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav></SideNav>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { SideNav },
  created() {
    // 現在ログインしているユーザーを取得する
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ユーザーを取得できた場合ログイン情報をセットする
        this.setLoginUser(user);
      } else {
        // ログイン情報を削除する
        this.deleteLoginUser();
      }
    });
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters(["isUser"])
  },
  methods: {
    ...mapActions([
      // ナビゲーションドロワーを開く
      "toggleSideMenu",
      // ログイン情報をセットする
      "setLoginUser",
      // ログイン情報を削除する
      "deleteLoginUser",
      // ログアウトする
      "logout"
    ])
  }
};
</script>
