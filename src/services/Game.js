import { $asleep } from '../utils';

class GameService {
  async start({ players }) {
    await $asleep(800);
    return {
      id: Math.random(),
    };
  }
}

export default new GameService();
