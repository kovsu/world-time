<script setup lang="ts">
import { zones } from "./composables/state";
import TimezoneSearch from "./components/TimezoneSearch.vue";
import ActionBar from "./components/ActionBar.vue";
import TimeSchedular from "./components/TimeSchedular.vue";
</script>

<template>
  <div class="container">
    <ActionBar />
    <TimeSchedular />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background-color: #222;
  color: #fff;
  color-scheme: dark;
}

.container {
  border: 1px solid rgba(128, 128, 128, 0.2);
  margin: 20px;
}
</style>
