import type { ICard } from '@/types';
import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

const defaultValue: ICard[] = [
  {
    id: 1,
    title: 'Карточка 1',
    description: 'Описание карточки 1',
  },
  {
    id: 2,
    title: 'Карточка 2',
    description:
      'Описание карточки 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, labore.',
  },
];

export const useCardsStore = defineStore('dashboard', {
  state: () => ({
    cards: useStorage<ICard[]>('dashboard', [...defaultValue], localStorage, {
      mergeDefaults: true,
    }),
  }),
  actions: {
    addCard(card: ICard) {
      this.cards?.push(card);
    },
    clear() {
      this.cards = [...defaultValue];
    },
    moveCard(dragCard: ICard, dropCard: ICard) {
      if (dragCard === dropCard) {
        return;
      }
      const dragIndex = this.cards?.indexOf(dragCard) ?? 0;
      const dropIndex = this.cards?.indexOf(dropCard) ?? 0;
      this.cards?.splice(dragIndex, 1);
      this.cards?.splice(dropIndex, 0, dragCard);
    },
  },
  getters: {
    getLength(): number {
      return this.cards?.length ?? 0;
    },
  },
});
