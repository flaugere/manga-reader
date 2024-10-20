<script setup lang="ts">
import { ref } from 'vue'
import { Comic, Group } from 'comic'
import ComicGroup from './ComicGroup.vue'
const props = defineProps({comic: Comic })
let groupToPrint : Group = ref(null);

</script>

<template>
  <!-- <li class="title-select" v-for="group in props.comic.groups" :key="group.name">
    <a :href="comic.groups">
      <div style="display: flex; align-content: center;"><img :src="comic.logo" style="float: left ;max-width: 90px; padding-right: 10px;"/> {{ comic.name }} : {{ group.name }}  </div>
    </a>
  </li> -->
  <div class="container mx-auto px-10">
    <h1>{{ props.comic.name }}</h1>
    <img :src="props.comic.image" />
  </div>
  <div class="container mx-auto px-10">
    <div class="title-select" v-for="group in props.comic.groups" @click.prevent="groupToPrint = group">
      {{ group.name }}
    </div>
    <comic-group v-if="groupToPrint?.name" :group="groupToPrint" />
  </div>
</template>
