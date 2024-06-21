<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
  }>(),
  {
    title: '',
    description: '',
  }
);
</script>

<template>
  <div>
    <v-card :height="200" color="card" class="card" rounded="lg">
      <v-card-item>
        <v-card-title class="card__title"> {{ title }}</v-card-title>
        <p class="card__text">{{ description }}</p>
      </v-card-item>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply cursor-pointer select-none;

  &__title {
    @apply text-xl font-bold;
  }

  &__text {
    @apply line-clamp-6;
  }
}
</style>
