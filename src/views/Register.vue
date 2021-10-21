<template>
  <div class="auth-wrapper">
    <form @submit.prevent="register">
      <h1>Register</h1>
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
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered. Please proceed to login!");
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
.auth-wrapper {
  color: white;
}

.auth-wrapper input {
  margin-right: 20px;
}
</style>
