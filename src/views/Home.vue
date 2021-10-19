<template>
  <div class="home">
    <TopNav />
    <Todo />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "Home",
  components: {
    Todo,
    TopNav,
  },
};
</script>
