<template>
  <div class="row">
    <div class="col 12" v-for="character in characters" :key="character.name">
      <Card :character="character" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './Card.vue'

const store = useStore()

const characters = computed(() => {
  return store.state.characters
})



onMounted(() => {
  store.dispatch('getCharacters')
})
</script>

