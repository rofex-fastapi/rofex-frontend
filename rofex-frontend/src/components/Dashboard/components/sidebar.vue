<template>
  <aside class="side-nav" id="show-side-navigation1">
    <i
      class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg"
      data-close="show-side-navigation1"
    ></i>
    <div class="heading">
      <img src="img/img-persona.png" alt="" />
      <div class="infoHome">
        <p>{{ currentUser.lastname + ", " + currentUser.name }}</p>
      </div>
    </div>
    <!--<div class="search">
      <input type="text" placeholder="Buscar" /><i class="fa fa-search"></i>
    </div>-->
    <ul class="categories">
      <li>
        <i class="fa fa-users fa-fw"></i><a href="#"> Graficos</a>
        <ul class="side-nav-dropdown">
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
        </ul>
      </li>
      <li>
        <i class="fa fa-bolt fa-fw"></i><a href="#"> Tablas</a>
        <ul class="side-nav-dropdown">
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
          <li><a href="#">a</a></li>
        </ul>
      </li>
      <li>
        <i class="fa fa-sign-out" style="color:white"></i
        ><v-btn @click="logout"> Cerrar sesion</v-btn>
      </li>
    </ul>
  </aside>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "Sidebar",
  props: {},
  computed: {
    ...mapState(["currentUser"]),
  },
  mounted() {
    this.$store.dispatch("getMe");
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then((response) => {
        this.$router.push({ name: "Login" });
        return response;
      });
    },
  },
});
</script>

<style></style>
