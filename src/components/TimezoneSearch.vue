<script setup lang="ts">
import { computed, ref } from "vue";
import Fuse from "fuse.js";
import { timezone } from "../composables/data";
import { addToTimezone } from "../composables/state";
import { Timezone } from "../types";
import TimezoneItem from "./TimezoneItem.vue";

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
  const ul = document.querySelector("ul")!;
  ul.scrollTop = 0;
  addToTimezone(t);
  input.value = "";
  index.value = 0;
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === "ArrowDown") {
    index.value = (index.value + 1) % searchResult.value.length;
    followActive();
  }
  if (e.key === "ArrowUp") {
    index.value =
      (index.value - 1 + searchResult.value.length) % searchResult.value.length;
    followActive();
  }
  if (e.key === "Enter") {
    add(searchResult.value[index.value].item);
  }
}

function followActive() {
  const ul = document.querySelector("ul")!;
  let active = document.querySelector(".active")?.getClientRects()[0].height!;
  // console.log(active);
  ul.scrollTop = index.value * (active + 5);
}
</script>

<template>
  <div class="search">
    <input
      type="text"
      v-model="input"
      placeholder="Search timezone ..."
      @keydown="onKeyDown"
    />
    <ul v-show="input">
      <TimezoneItem
        v-for="(res, idx) of searchResult"
        :key="res.refIndex"
        :name="res.item.name"
        :offset="res.item.offset"
        @click="add(res.item)"
        :class="{ active: index === idx }"
      >
      </TimezoneItem>
    </ul>
  </div>
</template>

<style scoped>
.search {
  position: relative;
}

input {
  width: 100%;
  height: 36px;
  border-radius: 5px;
  padding: 15px 10px;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.15);
}

ul {
  list-style: none;
  position: absolute;
  z-index: 2;
  background-color: #fff;
  width: 100%;
  height: 200px;
  overflow: auto;
  border: 1px solid rgba(128, 128, 128, 0.15);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar {
  display: none;
}

.active {
  background-color: #eee;
}
</style>
