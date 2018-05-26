import { $asleep } from '../utils';

// mock games to fake data
const GAMES = {};

export default {
  async start(buzzword) {
    // TODO: interact with firestore to retrieve already existing game or create a new game
    await $asleep(800);
    return GAMES[buzzword] = {
      buzzword,
      players: [],
      rounds: [],
      ...GAMES[buzzword],
    };
  },
};
