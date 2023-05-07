<script setup lang="ts">
import TheHeader from './TheHeader.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <TheHeader />
    <main class="relative flex-1">
      <slot />
    </main>
  </div>
</template>
