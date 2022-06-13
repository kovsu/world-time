<script setup lang="ts">
import { zones } from "../composables/state";
</script>

<template>
  <div>
   <pre>{{ zones }}</pre> 
  </div>
</template>

<style scoped>
div {
  padding: 10px;
}
</style>
