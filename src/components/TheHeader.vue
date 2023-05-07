<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between w-full p-3 shadow-sm">
    <div class="flex gap-5">
      <div class="dropdown">
        <label tabIndex="{0}" class="m-1">
          <button>
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul
            tabIndex="{0}"
            class="p-2 shadow dropdown-content menu menu-compact bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink to="/to-be-published">출간예정도서</RouterLink>
            </li>
          </ul>
        </label>
      </div>
      <div>
        <RouterLink to="/">한국문학</RouterLink>
      </div>
    </div>
    <div>
      <ul class="menu menu-horizontal">
        <li>
          <i class="fa-solid fa-question"></i>
        </li>
      </ul>
    </div>
  </header>
</template>
