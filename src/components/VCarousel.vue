<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import VSlide from "./VSlide.vue";

const props = defineProps(["slides"]);
const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true });

const scrollPrev = () => {
  if (emblaApi) emblaApi.value?.scrollPrev();
};

const scrollNext = () => {
  if (emblaApi) emblaApi.value?.scrollNext();
};
</script>

<template>
  <div class="embla" ref="emblaNode">
    <div class="embla_container">
      <VSlide v-for="slide in props.slides" :key="slide.id" :slide="slide" />
    </div>
    <button class="embla__prev" @click="scrollPrev">Prev</button>
    <button class="embla__next" @click="scrollNext">Next</button>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}

.embla_container {
  display: flex;
}
</style>
