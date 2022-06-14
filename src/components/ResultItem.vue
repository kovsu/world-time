<script setup lang="ts">
import { zones } from "../composables/state";

const props = defineProps<{
  index: number;
  offset: number;
  name: string;
}>();

const site = props.name.split("/")[0];
const country = props.name.split("/")[1];

function deleteItem() {
  zones.value.splice(props.index, 1);
}

function itemUp() {
  let i = zones.value.splice(props.index, 1)[0];
  zones.value.splice(props.index - 1, 0, i);
}

function itemDown() {
  let i = zones.value.splice(props.index, 1)[0];
  zones.value.splice(props.index + 1, 0, i);
}
</script>

<template>
  <div class="res">
    <div class="actions">
      <div @click="deleteItem">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-cross"></use>
        </svg>
      </div>
      <div v-if="index !== 0" @click="itemUp">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-circle-up"></use>
        </svg>
      </div>
      <div v-if="index !== zones.length - 1" @click="itemDown">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-circle-down"></use>
        </svg>
      </div>
    </div>
    <div class="offset">{{ offset }}</div>
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

  position: relative;
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

.actions {
  position: absolute;
  left: -20px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2px 5px;
}

.icon {
  display: block;
  width: 10px;
  height: 10px;
  fill: rgba(128, 128, 128, 0.8);
}
</style>
