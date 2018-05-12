import gameService from '../services/gameService';

const getInitialState = () => ({
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
    setBuzzword: (state, buzzword) => state.buzzword = buzzword,
    setPlayers: (state, players) => state.players = players,
    addPlayer: (state, player) => state.players.push(player),
    setRounds: (state, rounds) => state.rounds = rounds,
    addRound: (state, round) => state.rounds.push(round),
  },

  actions: {
    reset: ({ commit }) => commit('reset'),

    async start({ commit }, { buzzword, players }) {
      commit('setBuzzword', buzzword);
      commit('setPlayers', players);
      const { rounds } = await gameService.start({ buzzword, players });
      commit('setRounds', rounds);
      return {
        buzzword,
        players,
        rounds,
      };
    },
  },

};
