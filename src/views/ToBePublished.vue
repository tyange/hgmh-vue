<script lang="ts">
import { defineComponent } from 'vue'

import TheLayout from '@/components/TheLayout.vue'
import ThePublisher from '@/components/ThePublisher.vue'

import mondongLogoImg from '../assets/publisher-logo/munhak-dongne-logo.png'
import moonjiLogoImg from '../assets/publisher-logo/munhak-jisung-logo.png'
import changbiLogoImg from '../assets/publisher-logo/chang-bi-logo.png'
import minumsaLogoImg from '../assets/publisher-logo/minumsa-logo.png'

export default defineComponent({
  data() {
    return {
      publishers: [
        { publisher: '문학동네', logo: mondongLogoImg },
        { publisher: '문학과지성사', logo: moonjiLogoImg },
        { publisher: '창비', logo: changbiLogoImg },
        { publisher: '민음사', logo: minumsaLogoImg }
      ]
    }
  },
  components: {
    TheLayout,
    ThePublisher
  }
})
</script>

<template>
  <the-layout>
    <div class="h-full flex flex-col justify-between items-center p-10">
      <p class="italic">주요 출판사 출간예정도서</p>
      <the-publisher
        v-for="publisher in publishers"
        :key="publisher.publisher"
        :publisher-name="publisher.publisher"
        :logo-img-path="publisher.logo"
      />
    </div>
  </the-layout>
</template>

<style></style>
