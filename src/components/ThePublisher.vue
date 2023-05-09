<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ publisherId: string; publisherName: string; logoImgPath: string }>()

const altString = computed(() => {
  return `${props.publisherName} 로고 이미지`
})

const publisherPath = computed(() => {
  return `/to-be-published/${props.publisherId}`
})
</script>

<template>
  <div
    class="flex items-center justify-center h-32 p-5 border border-gray-200 rounded-md shadow-md cursor-pointer w-80 sm:w-96"
  >
    <div>
      <router-link :to="publisherPath">
        <img class="w-20" :src="logoImgPath" :alt="altString" />
      </router-link>
    </div>
  </div>
</template>
