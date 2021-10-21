<template>
  <div class="login-wrapper">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email Address..."
        v-model="email"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="password.."
        required
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Login successfull!!!");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.login-wrapper {
  color: white;
}
</style>
