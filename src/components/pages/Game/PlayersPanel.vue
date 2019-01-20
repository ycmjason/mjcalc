<template>
  <main>
    <input v-for="(player, i) of players" :key="i"
           :value="player">
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('game', ['players']),
  },
  methods: mapActions('game', ['setPlayers']),
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 1rem;
}
</style>
