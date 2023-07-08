<script setup lang="ts">
import { ref } from 'vue'
import { Comic } from 'comic'

const props = defineProps({comic: Comic })
</script>

<template>
  <div class="container mx-auto px-10">
    <h1>{{ props.comic.name }}</h1>
  </div>
</template>
