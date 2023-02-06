<script setup lang="ts">
import type { Slide } from "../types";
import VCard from "./VCard.vue";

defineProps<{
  slide: Slide;
}>();
</script>

<template>
  <div class="embla_slide">
    <h1>{{ slide.label }}</h1>
    <div class="card_wrapper">
      <VCard
        v-for="item in slide.slides"
        :key="item.id"
        :item="item"
        :slideLabel="slide.label"
      />
    </div>
  </div>
</template>

<style scoped>
.embla_slide {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
}
.card_wrapper {
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-auto-rows: 1fr;
  place-items: center;
}
</style>
