<script setup lang="ts">
import { computed } from 'vue'
import TheLoading from './TheLoading.vue'
import TheError from './TheError.vue'
import BookItem from './BookItem.vue'

import { useBooksStore } from '@/stores/books'

const store = useBooksStore()

const loadingState = computed(() => store.isLoading)
const error = computed(() => store.error)
const books = computed(() => store.getBooks)
</script>

<template>
  <div class="flex flex-col items-center w-full gap-10 p-2 md:p-0 md:w-auto">
    <the-loading v-if="loadingState" />
    <the-error v-if="!loadingState && error" />
    <ul v-if="!loadingState && !error" class="flex flex-col gap-12 mb-5">
      <li
        v-for="(book, index) in books"
        :key="index"
        class="w-full p-3 border shadow-md rounded-xl"
      >
        <book-item
          :title="book.TITLE"
          :pre_price="book.PRE_PRICE"
          :author="book.AUTHOR"
          :pre_date="book.PUBLISH_PREDATE"
          :isbn="book.EA_ISBN"
          :publisher="book.PUBLISHER"
        />
      </li>
    </ul>
  </div>
</template>
