<script setup lang="ts">
import { ref } from 'vue'
import { Comic } from 'comic'

const props = defineProps({comic: Comic })
</script>

<template>
  <li class="title-select" v-for="group in props.comic.groups" :key="group.name">
    <a :href="comic.groups">
      <div style="display: flex; align-content: center;"><img :src="comic.logo" style="float: left ;max-width: 90px; padding-right: 10px;"/> {{ comic.name }} : {{ group.name }}  </div>
    </a>
  </li>
  <!-- <div class="container mx-auto px-10">
    <h1>{{ props.comic.name }} : {{ props.comic.groups[] }}</h1>
    <h2>{{ props.comic.groups[0].name }}</h2>
    <img :src="props.comic.image" />
  </div>
  <div class="container mx-auto px-10">
    <h1>{{ props.comic.name }}</h1>
    <h2>{{ props.comic.groups[0].name }}</h2>
    <img :src="props.comic.image" />
  </div> -->
</template>
