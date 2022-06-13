<script setup lang="ts">
import { zones } from "./composables/state";
import TimezoneSearch from "./components/TimezoneSearch.vue";
import ActionBar from "./components/ActionBar.vue";
import TimeSchedular from "./components/TimeSchedular.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
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
  background-color: #eee;
}


.container {
  width: 40%;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 5px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
