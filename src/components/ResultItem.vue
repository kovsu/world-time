<script setup lang="ts">
const props = defineProps<{
  offset: number;
  name: string;
}>();

const site = props.name.split("/")[0];
const country = props.name.split("/")[1];
</script>

<template>
  <div class="res">
    <div class="offset">
      {{ offset }}
    </div>
    <div class="name">
      <p>{{ country }}</p>
      <span>{{ site }}</span>
    </div>
  </div>
</template>

<style scoped>
.res {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 15px;
}

.res:not(:last-child) {
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}

.name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name p {
  font-size: 1.8px;
  font-weight: 600;
}

.name span {
  font-size: 1.2px;
  color: rgba(0, 0, 0, 0.8);
}
</style>
