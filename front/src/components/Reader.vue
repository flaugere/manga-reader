<script setup lang="ts">
import { ref } from 'vue'
import { Comic, Group } from 'comic'
import ComicGroup from './ComicGroup.vue'
const props = defineProps({comic: Comic })
let groupToPrint : Group = ref(null);

</script>

<template>
  <div class="container mx-auto px-10">
    <h1>{{ props.comic.name }}</h1>
    <div v-for="group in props.comic.groups" @click.prevent="groupToPrint = group">
      {{ group.name }}
    </div>
    <comic-group v-if="groupToPrint?.name" :group="groupToPrint" />
  </div>
</template>
