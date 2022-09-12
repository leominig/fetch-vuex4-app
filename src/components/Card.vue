<template>
  <div class="card" style="width: 18rem">
    <img :src="character.image" class="card-img-top" :alt="character.name" />
    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
      <p class="card-text">{{ character.gender }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: (['character'])
}
</script>

<style>
</style>