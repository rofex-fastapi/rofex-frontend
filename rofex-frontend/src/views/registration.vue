<template>
  <registration />
</template>

<script>
import registration from "../components/registration-form";

export default {
  name: "Registration",
  beforeCreate() {//check if the user is loggedIn
    if(this.$store.getters.isLoggedIn){
      this.$router.push({ name: "Dashboard" });
    }    
  },
  components: {
    registration,
  },
};
</script>
