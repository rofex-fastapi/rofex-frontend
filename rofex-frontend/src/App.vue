<template>
  <v-app>
    <v-main>
      <login />
    </v-main>
  </v-app>
</template>

<script>
import login from "./components/login-form.vue";

export default {
  name: "App",

  components: { login },

  data: () => ({
    //
  }),
};
</script>

<!--<template>
  <v-app>
    <v-main>
      <registration />
    </v-main>
  </v-app>
</template>

<script>
import registration from "./components/registration-form.vue";

export default {
  name: "App",

  components: { registration },

  data: () => ({
    //
  }),
};
</script>-->

<!--<template>
  <v-app>
    <v-main>
      <dashboard />
    </v-main>
  </v-app>
</template>

<script>
import dashboard from "./components/Dashboard/dashboard.vue";

export default {
  name: "App",

  components: { dashboard },

  data: () => ({
    //
  }),
};
</script>-->
