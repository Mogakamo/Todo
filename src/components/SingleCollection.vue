<template>
  <div class="collection">
    <div class="left flex">
      <div class="back-arrow">
        <i class="fas fa-angle-left"></i>
      </div>
      <h2 class="">School</h2>
    </div>

    <div class="right"><i class="fas fa-ellipsis-h"></i></div>
  </div>
</template>

<script>
export default {
  name: "SingleCollection",
};
</script>

<style lang="css" scoped>
.collection {
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 125px;
  left: 450px;
}

.right-margn {
  margin-left: 32px;
}

.flex {
  display: flex;
}

.pad {
  padding: 5px;
}

.back-arrow {
  border: transparent;
  border-radius: 5px;
  background-color: rgba(99, 98, 98, 0);
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0;
  padding-top: 8px;
}

.back-arrow:hover {
  background-color: wheat;
}

.right {
  float: right;
  margin-left: 600px;
}

.left {
  flex: 1;
}
</style>
