<script setup lang="ts">
import { zones } from "../composables/state";
import ResultItem from "./ResultItem.vue";
</script>

<template>
  <div>
    <ResultItem
      v-for="(i, index) in zones"
      :key="i.name"
      :index="index"
      :name="i.name"
      :offset="i.offset"
    ></ResultItem>
  </div>
</template>

<style scoped></style>
