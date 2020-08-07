<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>マイアドレス帳</h1>
        <p>
          マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。
        </p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color="info">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
