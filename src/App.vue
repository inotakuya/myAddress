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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: { SideNav },
  created() {
    // 現在ログインしているユーザーを取得する
    firebase.auth().onAuthStateChanged(user => {
      const cuurentRouteName = this.$router.currentRoute.name;
      if (user) {
        // ユーザーを取得できた場合ログイン情報をセットする
        this.setLoginUser(user);
        // 連絡先情報をすべて取得
        this.fetchAddresses();
        if (cuurentRouteName === "home") {
          // ホームの場合、連絡先一覧画面に遷移する
          this.$router.push({ name: "addresses" }, () => {});
        }
      } else {
        // ログイン情報を削除する
        this.deleteLoginUser();
          // 連絡先情報をすべて削除
        this.deleteAddresses();
        if (cuurentRouteName !== "home") {
          // ホーム画面以外の場合、ホームに遷移する
          this.$router.push({ name: "home" }, () => {});
        }
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
      "logout",
      // 連絡先一覧情報取得
      "fetchAddresses",
      // 連絡先一覧情報削除
      "deleteAddresses"
    ])
  }
};
</script>
