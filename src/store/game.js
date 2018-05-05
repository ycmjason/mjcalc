import GameService from '../services/Game';

const getInitialState = () => ({
  id: null,
  players: [],
  games: [],
});

export default {
  state: getInitialState(),

  getters: {},

  mutations: {
    reset: (state) => Object.assign(state, getInitialState()),
    setId: (state, id) => state.id = id,
    setPlayers: (state, players) => state.players = players,
    addPlayer: (state, player) => state.players.push(player),
    addRound: (state, round) => state.rounds.push(round),
  },

  actions: {
    reset: ({ commit }) => commit('reset'),
    async start({ players }) {
    },
  },

};
