<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheLayout from '@/components/TheLayout.vue'
import BookList from '@/components/BookList.vue'

import { useBooksStore } from '@/stores/books'

import { format, addYears } from 'date-fns'

const route = useRoute()
const store = useBooksStore()

const paramsConvertor = (params: string) => {
  switch (params) {
    case 'mundong':
      return '문학동네'
    case 'munji':
      return '문학과지성사'
    case 'changbi':
      return '창비'
    case 'minumsa':
      return '민음사'
    default:
      return params
  }
}

const submitSeojiAPI = () => {
  store.fetchBooks({
    enteredKeyword: paramsConvertor(route.params.publisher as string),
    selectedKeywordType: 'publisher',
    enteredStartingDate: format(new Date(), 'yyyy-MM-dd'),
    enteredEndDate: format(addYears(new Date(), 1), 'yyyy-MM-dd'),
    selectedOrderBy: 'DESC',
    selectedSort: 'PUBLISH_PREDATE',
    isEbook: 'N'
  })
}

onMounted(() => {
  submitSeojiAPI()
})
</script>

<template>
  <the-layout>
    <book-list></book-list>
  </the-layout>
</template>
