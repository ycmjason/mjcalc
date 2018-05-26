<template>
  <div>
    <input type="text" v-model="buzzword">
    <button @click="startGame(buzzword)">Start game!</button>
  </div>
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
