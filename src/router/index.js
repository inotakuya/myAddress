import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Addresses from "../views/Addresses.vue"
import AddressForm from "../views/AddressForm.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/addresses",
    name: "addresses",
    component: Addresses,
  },
  {
    path: "/addresses/:address_id?/edit",
    name: "address_edit",
    component: AddressForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
