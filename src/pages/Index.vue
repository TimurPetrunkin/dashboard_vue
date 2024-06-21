<script setup lang="ts">
import Card from '@/components/Card/Card.vue';
import ModalWindow from '@/components/ModalWindow/ModalWindows.vue';
import { useCardsStore } from '@/stores/card.store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const cardsStore = useCardsStore();

const isDraggable = ref(true);
const dragCardRef = ref<ICard | null>(null);
const openedCardRef = ref<ICard | null>(null);

function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card;
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
}

function handleDrop(dropCard: ICard | null) {
  if (dragCardRef.value && dropCard) {
    cardsStore.moveCard(dragCardRef.value, dropCard);
  }
}
</script>
<template>
  <div class="flex justify-between items-center">
    <ModalWindow
      v-if="openedCardRef"
      :card="openedCardRef"
      @close="openedCardRef = null"
    />
    <div class="flex gap-3">
      <v-btn @click="router.push({ name: 'AddCard' })" color="primary">
        Добавить
      </v-btn>
      <v-btn @click="cardsStore.clear()" color="primary"> Сбросить </v-btn>
    </div>
    <v-switch
      v-model="isDraggable"
      color="primary"
      label="Drag&Drop"
    ></v-switch>
  </div>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="card in cardsStore.cards"
      :key="card.id"
      :title="card.title"
      :description="card.description"
      :draggable="isDraggable"
      @click="() => (openedCardRef = card)"
      @dragstart="() => handleDragStart(card)"
      @dragover="handleDragOver"
      @drop="() => handleDrop(card)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
