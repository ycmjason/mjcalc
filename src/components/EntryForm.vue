<template>
  <main>
    <input type="text" v-model="buzzword">
    <button @click="startGame(buzzword)">Start game!</button>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    buzzword: '',
  }),
  methods: {
    ...mapActions({
      startGame: 'game/start',
    }),
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
