<script setup lang="ts">
import { computed, ref } from "vue";
import Fuse from "fuse.js";
import { timezone } from "../composables/data";
import { addToTimezone } from "../composables/state";
import { Timezone } from "../types";

// fuzzy searching
const fuse = new Fuse(timezone, {
  keys: ["name"],
});

const input = ref("");
const index = ref(0);
const searchResult = computed(() => {
  return fuse.search(input.value);
});

function add(t: Timezone) {
  addToTimezone(t);
  input.value = "";
  index.value = 0;
}
</script>

<template>
  <div class="search">
    <input type="text" v-model="input" placeholder="Search timezone ..." />
    <ul v-show="input">
      <li
        v-for="res of searchResult"
        :key="res.refIndex"
        @click="add(res.item)"
      >
        <div>
          {{ res.item.offset }}
        </div>
        <div>
          {{ res.item.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search {
  position: relative;
}

input {
  width: 100%;
  padding: 5px 10px;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.15);
}

ul {
  list-style: none;
  position: absolute;
  background-color: gray;
  width: 100%;
}

li {
  display: flex;
  margin-left: 10px;
  gap: 20px;
}
</style>
