<template>
  <div class="loginwrapper">
    <form
      v-on:submit.prevent="errorMessage.length == 0 ? validateForm() : ''"
      class="formwrapper"
    >
      <h1 class="text-center titlesignup">Crear Cuenta</h1>
      <div v-if="errorMessage" class="errormessage">
        <div v-for="error in errorMessage" v-bind:key="error.index">
          {{ error }}
        </div>
      </div>
      <div class="userinputwrapper">
        <label for="surname">
          <v-text-field
            label="Apellido"
            name="surname"
            v-on:click="clearError"
            value=""
            required
          />
        </label>
      </div>
      <div class="userinputwrapper">
        <label for="name">
          <v-text-field
            label="Nombre"
            name="name"
            v-on:click="clearError"
            value=""
            required
          />
        </label>
      </div>
      <div class="userinputwrapper">
        <label for="email">
          <v-text-field
            label="Correo Electronico"
            name="email"
            v-on:click="clearError"
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
            :type="'password'"
            v-on:click="clearError"
            id="password"
            value=""
          />
        </label>
      </div>
      <div>
        <label for="password2">
          <v-text-field
            label="Repita la Contraseña"
            name="password2"
            required
            :type="'password'"
            v-on:click="clearError"
            id="password2"
            value=""
          />
        </label>
      </div>
      <div><button type="submit" class="myButton" >Aceptar</button></div><br>
      <div class="signup">
        <hr />
        <br />
        <span>
          Ya tienes cuenta? <router-link to="/">Iniciar Sesión</router-link></span
        >
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "SignUp",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      errorMessage: []
    };
  },
  methods: {
    validateForm() {
      console.log(history);
      if (this.firstname == "") {
        this.errorMessage.push("firstname is required");
      }
      if (this.password == "") {
        this.errorMessage.push(" Password is required");
      }
      if (this.lastname == "") {
        this.errorMessage.push("lastname is required");
      }
      if (this.email == "") {
        this.errorMessage.push("email is required");
        return;
      }
      if (this.firstname !== "" && this.password !== "") {
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
        firstname: this.firstname,
        lastname: this.lastname,
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
</style>
