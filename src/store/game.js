import gameService from '../services/gameService';

const getInitialState = () => ({
  started: false,
  buzzword: null,
  players: [],
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
    addPlayer: (state, player) => state.players.push(player),
    setRounds: (state, rounds) => state.rounds = rounds,
    addRound: (state, round) => state.rounds.push(round),
  },

  actions: {
    reset: ({ commit }) => commit('reset'),

    async start ({ commit }, buzzword) {
      commit('setBuzzword', buzzword);
      const { players, rounds } = await gameService.findOrCreate(buzzword);
      commit('setPlayers', players);
      commit('setRounds', rounds);
      commit('start');
      return { buzzword, players, rounds };
    },
  },

};
