<template>
  <aside class="side-nav" id="show-side-navigation1">
    <i
      class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg"
      data-close="show-side-navigation1"
    ></i><br>
    <div class="heading">
      <img src="img/img-persona.png" alt="" />
      <div class="infoHome">
        <p>Nombre</p>
        <h3 v-if="user" class="user">{{ user }}</h3>
        <p>Datos</p><br>
      </div>
    </div>
    <!--<div class="search">
      <input type="text" placeholder="Buscar" /><i class="fa fa-search"></i>
    </div>-->
    <ul class="categories">
      <li>
        <i class="fa fa-users fa-fw"></i>
        <router-link to="/dashboard">Home</router-link >        
      </li>
      <li>
        <i class="fa fa-bolt fa-fw"></i>
        <router-link to="/trades">Agregar Trades</router-link >          
      </li>
      <li>
        <i class="fa fa-sign-out" style="color:white"></i
        ><a href="#"> Cerrar sesion</a>
      </li>
    </ul>
  </aside>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Sidebar",
  props: {
    user: String,
  },
});
</script>

<style></style>
