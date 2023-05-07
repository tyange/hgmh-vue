<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  props: {
    publisherName: { type: String, required: true },
    logoImgPath: { type: String }
  },
  computed: {
    altString() {
      return `${this.publisherName} 로고 이미지`
    }
  }
})
</script>

<template>
  <div
    class="h-32 w-80 sm:w-96 border border-gray-200 rounded-md shadow-md flex justify-center items-center p-5 cursor-pointer"
  >
    <div>
      <img class="w-20" :src="logoImgPath" :alt="altString" />
    </div>
  </div>
</template>
