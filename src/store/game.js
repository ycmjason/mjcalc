import gameService from '@/services/gameService';
import { deepEqual } from '@/utils';

const getInitialState = () => ({
  started: false,
  buzzword: null,
  players: [],
  currentPlayers: [],
  rounds: [],
});

export default {
  namespaced: true,

  state: getInitialState(),

  getters: {},

  mutations: {
    reset: (state) => Object.assign(state, getInitialState()),
    start: (state) => state.started = true,
    setBuzzword: (state, buzzword) => state.buzzword = buzzword,
    setPlayers: (state, players) => state.players = players,
    setCurrentPlayers: (state, playerIds) => {
      if (playerIds.length !== 4) throw Error('Mahjong is a game of 4');
      state.currentPlayers = playerIds;
    },
    addPlayer: (state, player) => state.players.push(player),
    setRounds: (state, rounds) => state.rounds = rounds,
    addRound: (state, round) => state.rounds.push(round),
  },

  actions: {
    reset: ({ commit }) => commit('reset'),

    async start ({ commit }, buzzword) {
      commit('setBuzzword', buzzword);
      const {
        players,
        currentPlayers,
        rounds,
      } = await gameService.findOneOrCreate(buzzword);
      commit('setPlayers', players);
      commit('setCurrentPlayers', currentPlayers);
      commit('setRounds', rounds);
      commit('start');
      return { buzzword, players, currentPlayers, rounds };
    },

    async setPlayers ({ state, commit }, newPlayers) {
      const { started, buzzword, players } = state;
      if (!started) return;
      if (deepEqual(players, newPlayers)) return;
      gameService.setPlayers(buzzword, newPlayers);
    },
  },

};
