<script setup lang="ts">
import { ref } from 'vue'
import { Group } from 'comic'

const props = defineProps({group: Group })

</script>

<template>
  <div class="container mx-auto px-10">
    <h2>{{ props.group.name }}</h2>
    <div v-for="page in props.group.pages">{{ page.image }}</div>
  </div>
</template>
