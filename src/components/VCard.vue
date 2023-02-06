<script setup>
const props = defineProps(["item", "slideLabel"]);

function handleClick(item, slideLabel) {
  console.log("Item", item, slideLabel);
}
</script>

<template>
  <div
    class="card"
    @click="() => handleClick(props.item, props.slideLabel)"
  ></div>
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
