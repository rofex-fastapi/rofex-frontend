<template>
  <aside class="side-nav" id="show-side-navigation1">
    <i
      class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg"
      data-close="show-side-navigation1"
    ></i
    ><br />
    <div class="heading">
      <img src="img/img-persona.png" alt="" />
      <div class="infoHome">
        <p v-if="isLoggedIn">
          {{ currentUser.lastname + ", " + currentUser.name }}
        </p>
      </div>
    </div>
    <!--<div class="search">
      <input type="text" placeholder="Buscar" /><i class="fa fa-search"></i>
    </div>-->
    <ul class="categories">
      <li>
        <i class="fa fa-users fa-fw"></i>
        <router-link to="/dashboard">Home</router-link>
      </li>
      <li>
        <i class="fa fa-bolt fa-fw"></i>
        <router-link to="/trades">Agregar Trades</router-link>
      </li>
      <li>
        <i class="fa fa-sign-out" style="color:white"></i
        ><v-btn @click="logout"> Cerrar sesion</v-btn>
      </li>
    </ul>
    <!-- <div v-for="trade in trades" :key="trade.id" color="white">
      {{ trade.id }}
    </div> -->
  </aside>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
export default Vue.extend({
  name: "Sidebar",
  props: {},
  computed: {
    ...mapState(["currentUser"], ["trades"]),
    ...mapGetters(["isLoggedIn"]),
  },
  mounted() {
    this.$store.dispatch("getMe").then(() => {
      this.$store.dispatch("getTrades");
    });
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
