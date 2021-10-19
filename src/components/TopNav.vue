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
      <i class="fas fa-plus"></i>
      <i class="fas fa-search left-margin"></i>
      <i class="far fa-bell left-margin"></i>
      <i class="fas fa-user left-margin right-margin"></i>
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
  /* border-bottom: 1px solid gray; */
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

.dashboard {
  height: 15px;
  width: 15px;
  color: rgb(212, 212, 212);
}

.left-margin {
  margin-left: 20px;
}

.right-margin {
  margin-right: 5px;
}
</style>
