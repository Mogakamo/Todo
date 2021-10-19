<template>
  <div>
    <div class="collection">
      <div class="pad school-collection">
        <i class="fas fa-chevron-left"></i>
      </div>
      <h2 class="pad">School</h2>
    </div>
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
  flex-direction: row;
  align-content: center;
  justify-items: center;
  justify-content: center;
  padding-top: 30px;
}

.right-margn {
  margin-left: 32px;
}

.pad {
  padding: 10px;
}

.school-collection {
  border: transparent;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(255, 147, 165);
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
