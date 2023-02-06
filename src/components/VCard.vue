<script setup lang="ts">
import type { SlideItem } from "@/types";

defineProps<{
  item: SlideItem;
  slideLabel: string;
}>();

function handleClick({ item, slideLabel }: any) {
  console.log("Item", item, slideLabel);
}
</script>

<template>
  <div class="card" @click="() => handleClick({ item, slideLabel })">
    <!-- <img :src="item.imageUrl" :alt="item.title" /> -->
  </div>
</template>

<style scoped>
.card {
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #f5f5dc25;
  border: 1px solid #00000010;
}

.card:hover {
  cursor: pointer;
  border-color: black;
  background-color: #f5f5dc;
}
</style>
