<template>
  <div class="todo-wrapper">
    <div class="sidebar">
      <h4 class="sidebar_header">Collection</h4>
      <ul>
        <li class="flex list-styling">
          <div class="school-collection"><i class="fas fa-book-open"></i></div>
          <span class="left-margin">School</span>
        </li>
        <li class="flex">
          <div class="personal-collection"><i class="far fa-user"></i></div>
          <span class="left-margin">Personal</span>
        </li>
        <li class="flex">
          <div class="design-collection">
            <i class="fas fa-paint-brush"></i>
          </div>
          <span class="left-margin">Design</span>
        </li>
        <li class="flex">
          <div class="coding-collection"><i class="fas fa-code"></i></div>
          <span class="left-margin">Coding</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <SingleCollection />
    </div>
  </div>
</template>

<script>
import SingleCollection from "@/components/SingleCollection.vue";

export default {
  name: "Todo",
  components: {
    SingleCollection,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.todo-wrapper {
  color: white;
  display: grid;
  grid-template-columns: 250px 2fr;
}
.sidebar {
  border-right: 1px solid gray;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.sidebar_header {
  padding: 15px;
  align-content: center;
  background-color: rgb(22, 32, 88);
  width: 100%;
  border: transparent;
  border-radius: 15px;
}

.sidebar_header:hover {
  background-color: rgb(13, 38, 94);
}

ul li {
  padding: 15px;
  align-self: center;
  justify-self: center;
  background-color: rgb(21, 15, 73);
  margin-top: 5px;
  border: transparent;
  border-radius: 15px;
  width: 100%;
}

ul li:hover {
  background-color: rgb(91, 60, 179);
}

.flex {
  display: flex;
  flex-direction: row;
}

/* .list-styling {
  background-color: teal;
  border: transparent;
  border-radius: 15px;
  margin-top: 3px;
} */

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

.personal-collection {
  border: transparent;
  padding: 7px;
  border-radius: 5px;
  background-color: rgb(162, 227, 248);
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.design-collection {
  border: transparent;
  padding: 7px;
  border-radius: 5px;
  background-color: rgb(253, 75, 253);
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.coding-collection {
  border: transparent;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(188, 255, 89);
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
