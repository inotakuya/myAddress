<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav></SideNav>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { SideNav },
  data: () => ({
    drawer: false
  }),
  methods: {
    ...mapActions({
      // ナビゲーションドロワーを開く
      toggleSideMenu: "toggleSideMenu"
    })
  }
};
</script>
