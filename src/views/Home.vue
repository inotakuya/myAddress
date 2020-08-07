<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>マイアドレス帳</h1>
        <p v-if="!isUser">
          マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。
        </p>
      </v-flex>

      <v-flex xs12 mt-5 v-if="!isUser">
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
      <v-flex xs12 mt-5 v-if="isUser">
        <v-btn color="info" @click="logout">ログアウト</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["isUser"])
  },
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>
