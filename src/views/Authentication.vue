<template>
  <div class="auth-wrapper">
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
  name: "Authentication",
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
