<template>
     <aside class="side-nav" id="show-side-navigation1">
      <i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"></i>
      <div class="heading">
        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
        <div class="infoHome">
          <p>Nombre</p>
          <h3 v-if="user" class="user">{{user}}</h3>
          <p>Datos</p>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar"><i class="fa fa-search"></i>
      </div>
      <ul class="categories">
        <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> Sobre Nosotros</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
          </ul>
        </li>
        <li><i class="fa fa-envelope fa-fw"></i><a href="#"> Contactanos</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
          </ul>
        </li>
       <li><i class="fa fa-users fa-fw"></i><a href="#"> Graficos</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
          </ul>
        </li>
        <li><i class="fa fa-bolt fa-fw"></i><a href="#"> Tablas</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
          </ul>
        </li>
        <p>Ejemplos:</p>
        <li><i class="fa fa-envelope-open-o fa-fw"></i><a href="#"> Mensajes <span class="num dang">56</span></a></li>
        <li><i class="fa fa-wrench fa-fw"></i><a href="#"> Configuracion <span class="num prim">6</span></a>
          <ul class="side-nav-dropdown">
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
            <li><a href="#">a</a></li>
          </ul>
        </li>
        <li><i class="fa fa-laptop fa-fw"></i><a href="#"> Sobre UI &amp; UX <span class="num succ">43</span></a></li>
        <li><i class="fa fa-comments-o fa-fw"></i><a href="#"> Cosas</a></li>
      </ul>
    </aside>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name:'Sidebar',
  props:{
      user:String
  }
})
</script>