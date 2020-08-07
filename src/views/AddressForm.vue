<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="名前"></v-text-field>
              <v-text-field
                v-model="address.tel"
                label="電話番号"
              ></v-text-field>
              <v-text-field
                v-model="address.email"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="address.address"
                label="住所"
              ></v-text-field>
              <div class="text-center">
                <v-btn @click="$router.push({ name: 'addresses' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.addressId = this.$route.params.address_id;
    if (!this.addressId) {
      // 新規登録の場合は、連絡先の情報を取得しない
      return;
    }
    // IDをキーにして、連絡先情報を取得
    const address = this.getAddressById(this.addressId);
    if (address) {
      // 取得できた場合は、連絡先を画面に設定する
      this.address = address;
    } else {
      // 取得できない場合は、連絡先一覧に遷移する
      this.$router.push({ name: "addresses" });
    }
  },
  data() {
    return {
      address: {},
      addressId: null
    };
  },
  computed: {
    ...mapGetters([
      // Idをキーとして、連絡先を取得
      "getAddressById"
    ])
  },

  methods: {
    submit() {
      if (this.addressId) {
        // IDが存在する場合は更新
        this.updateAddress({
          id: this.addressId,
          address: this.address
        });
      } else {
        // 新規登録
        this.addAddress(this.address);
      }
      // 連絡先一覧に遷移
      this.$router.push({ name: "addresses" });
      this.address = {};
    },

    ...mapActions([
      // 連絡先を追加
      "addAddress",
      // 連絡先を更新
      "updateAddress"
    ])
  }
};
</script>
