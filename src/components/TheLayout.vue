<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from './TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }
})
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <the-header />
    <main class="relative flex-1">
      <slot />
    </main>
  </div>
</template>
