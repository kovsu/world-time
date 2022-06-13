<script setup lang="ts">import { computed } from 'vue';

const props = defineProps<{
  name: string;
}>();

const uppercase = computed(() => {
  
})
</script>

<template>
  <h1>Hello, {{ name }}</h1>
</template>

<style scoped></style>
