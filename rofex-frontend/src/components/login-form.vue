<template>
  <div class="loginwrapper">
    <form
      v-on:submit.prevent="errorMessage.length == 0 ? validateForm() : ''"
      class="formwrapper"
    >
      <h1 class="text-center">Iniciar Sesion</h1>
      <div class="userinputwrapper">
        <label for="username">
          <v-text-field
            label="Usuario"
            name="username"
            v-on:click="clearError"
            v-model="username"
            value=""
            required
          />
        </label>
      </div>
      <div>
        <label for="password">
          <v-text-field
            label="Contraseña"
            name="password"
            required
            :type="showPass ? 'text' : 'password'"
            v-on:click="clearError"
            id="password"
            v-model="password"
            value=""
          />
        </label>
      </div>
      <div><button type="submit" class="myButton" >Ingresar</button></div>
      <div v-if="errorMessage" class="errormessage">
        <div v-for="error in errorMessage" v-bind:key="error.index">
          {{ error }}
        </div>
      </div>
      <br />
      <div class="signup">
        <hr />
        <br />
        <span>
          No tienes una cuenta?<router-link to="/register">
            Registrarte</router-link
          ></span
        >
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: []
    };
  },
  methods: {
    validateForm() {
      console.log(history);
      if (this.username == "") {
        this.errorMessage.push(" Username is required");
      }
      if (this.password == "") {
        this.errorMessage.push(" Password is required");
        return;
      }
      if (this.username !== "" && this.password !== "") {
        this.submitForm();
      }
      console.log(this.errorMessage);
    },
    clearError() {
      console.log("form fields cleared");
      this.errorMessage = [];
    },
    submitForm() {
      const data = {
        email: this.username,
        password: this.password
      };
      console.log(data);
      localStorage.setItem("userinfo", JSON.stringify(data)); //in the absence of a real api for user auth this would handle auth
      alert("Form Submitted");
      //make network request
      //axios post
      this.$router.push("/dashboard");
    }
  }
});
</script>

<style>
.signup {
  position: relative;
  top: 2rem;
}
.loginwrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 8%;
}
.formwrapper {
  border-top: 2px solid #0275d8;
  box-shadow: rgba(0, 0, 0, 0.47) 0px 5px 14px;
  padding: 4rem 1rem;
  width: 450px;

  border-radius: 5px;
}
.myButton {
  cursor: pointer;
	box-shadow: 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:5px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
  width: 99%;
  height: 40px;
  position: relative;
  top: 1rem;
}
.myButton:hover {
	background:linear-gradient(to bottom, #1e62d0 100%, #3d94f6 100%);
	background-color:#1e62d0;
}
.errormessage {
  color: red;
}
@media (max-width: 1005px) {
  .namesfield {
    width: 80%;
  }
}
.userinputwrapper {
  padding-top: 1rem;
}
</style>
