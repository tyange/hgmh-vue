<script setup lang="ts">
import TheLayout from '@/components/TheLayout.vue'
import ThePublisher from '@/components/ThePublisher.vue'

import mondongLogoImg from '../assets/publisher-logo/munhak-dongne-logo.png'
import moonjiLogoImg from '../assets/publisher-logo/munhak-jisung-logo.png'
import changbiLogoImg from '../assets/publisher-logo/chang-bi-logo.png'
import minumsaLogoImg from '../assets/publisher-logo/minumsa-logo.png'

const publishers = [
  { publisherId: 'mundong', publisherName: '문학동네', logo: mondongLogoImg },
  { publisherId: 'munji', publisherName: '문학과지성사', logo: moonjiLogoImg },
  { publisherId: 'changbi', publisherName: '창비', logo: changbiLogoImg },
  { publisherId: 'minumsa', publisherName: '민음사', logo: minumsaLogoImg }
]
</script>

<template>
  <the-layout>
    <div class="flex flex-col items-center justify-between h-full p-10">
      <p class="italic">주요 출판사 출간예정도서</p>
      <the-publisher
        v-for="publisher in publishers"
        :key="publisher.publisherId"
        :publisher-id="publisher.publisherId"
        :publisher-name="publisher.publisherName"
        :logo-img-path="publisher.logo"
      />
    </div>
  </the-layout>
</template>

<style></style>
