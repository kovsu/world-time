import { ref } from "vue";
import { Timezone } from "../types";

export const zones = ref<Timezone[]>([]);

export function addToTimezone(zone: Timezone) {
  zones.value.push(zone);
}
