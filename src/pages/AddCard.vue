<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import type { ICard } from '@/types';
import * as yup from 'yup';
import { useCardsStore } from '@/stores/card.store';

const cardsStore = useCardsStore();
const router = useRouter();

const { handleSubmit, defineField, setFieldValue, setValues, values, errors } =
  useForm<ICard>({
    validationSchema: yup.object({
      title: yup.string().required('Название обязательно'),
      description: yup.string().required('Описание обязательно'),
    }),
  });

const [title, titleAttrs] = defineField('title', {
  validateOnModelUpdate: false,
});
const [description, descriptionAttrs] = defineField('description', {
  validateOnModelUpdate: false,
});

const onSubmit = handleSubmit(values => {
  values.id = cardsStore.getLength + 1;
  cardsStore.addCard(values);
  router.push({ name: 'Home' });
});
</script>

<template>
  <div>
    <h2 class="text-xl mb-2">Добавить карточку</h2>
    <form submit="onSubmit">
      <v-text-field
        v-model="title"
        v-bind="titleAttrs"
        label="Название"
        :error="!!errors.title"
        :error-messages="errors.title"
        class="mb-2"
      ></v-text-field>
      <v-textarea
        v-model="description"
        v-bind="descriptionAttrs"
        label="Описание"
        :error="!!errors.description"
        :error-messages="errors.description"
        class="mb-2"
      ></v-textarea>
      <div class="flex justify-around">
        <v-btn @click="onSubmit" color="primary">Добавить</v-btn>
        <v-btn @click="router.push({ name: 'Home' })" color="primary"
          >Отмена</v-btn
        >
      </div>
    </form>
  </div>
</template>

<style scoped></style>
