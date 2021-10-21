<template>
  <div class="nav-bar">
    <div class="left">
      <i class="fas fa-bars"></i>
      <span class="left-margin">
        <img
          class="dashboard right-margin"
          src="https://img.icons8.com/color/48/000000/dashboard-layout.png"
        />Dashboard</span
      >
      <span class="left-margin"
        ><i class="far fa-folder-open right-margin"></i>Collection</span
      >
    </div>
    <div class="right">
      <i class="fas fa-plus pad-bottom"></i>
      <i class="fas fa-search left-margin"></i>
      <i class="far fa-bell left-margin"></i>
      <img
        class=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Topnav",
};
</script>

<style lang="css" scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  padding: 12px;
  border-bottom: 1px solid gray;
}

.left {
  margin-left: 10px;
  color: rgb(212, 212, 212);
  justify-content: space-around;
  flex: 1;
}

.right {
  float: right;
  color: rgb(212, 212, 212);
}

.pad-bottom {
  padding-bottom: 5px;
}
.dashboard {
  height: 15px;
  width: 15px;
  color: rgb(212, 212, 212);
}

img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 20px;
  border: transparent;
  align-self: inherit;
  border-radius: 50%;
}

.left-margin {
  margin-left: 20px;
}

.right-margin {
  margin-right: 5px;
}
</style>
