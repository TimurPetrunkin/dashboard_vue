<script setup lang="ts">
import type { ICard } from '@/types';
const props = defineProps<{
  card: ICard;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-30 opacity-80"></div>
  <div
    class="bg-card w-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-10 rounded-xl shadow-xl"
  >
    <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
    <p class="mb-4">{{ card.description }}</p>
    <div class="flex justify-center">
      <v-btn @click="emit('close')" color="primary">Закрыть</v-btn>
    </div>
  </div>
</template>

<style scoped></style>
