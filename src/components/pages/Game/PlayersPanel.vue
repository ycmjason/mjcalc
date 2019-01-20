<template>
  <main>
    <ul class="playerList">
      <li class="player" v-for="(player, i) of players" :key="i">
        <mj-checkbox :checked="currentPlayers.includes(i)"
                     class="checkbox" />
        <input :value="player"
               @input="setPlayer(i, $event.target.value)">
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import debounce from 'lodash.debounce';

export default {
  computed: {
    ...mapState('game', ['players', 'currentPlayers']),
  },
  methods: {
    setPlayer: debounce(function(i, name) {
      const { players } = this;
      this.setPlayers([
        ...players.slice(0, i),
        name,
        ...players.slice(i + 1),
      ]);
    }, 1000),

    ...mapActions('game', ['setPlayers']),
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}

.playerList {
  padding: 0;
}

.player {
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 1rem;

  .checkbox {
    margin-right: 1rem;
  }

  input {
    flex-grow: 1;
  }
}
</style>
