import { $asleep } from '../utils';

export default {
  async start({ buzzword, players }) {
    // TODO: interact with firestore to retrieve already existing game or create a new game
    await $asleep(800);
    return {
      buzzword,
      players,
      rounds: [],
    };
  },
};
