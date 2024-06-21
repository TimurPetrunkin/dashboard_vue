<script setup lang="ts"></script>

<template>
  <v-app>
    <v-main>
      <div class="w-4/5 m-auto mt-14">
        <div class="p-10">
          <h1 class="font-bold text-2xl mb-5">Dashboard</h1>
          <router-view />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss"></style>
