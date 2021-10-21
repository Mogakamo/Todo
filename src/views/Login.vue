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
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style lang="css" scoped>
.login-wrapper {
  color: white;
}
</style>
