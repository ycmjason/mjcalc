import LRU from 'lru-cache';

import { games } from '@/fires';
import { random, deepEqual } from '@/utils';
import { shuffle } from '@/utils/array';
import buzzwords from '@/resources/buzzwords.json';

const isBuzzwordFree = async buzzword => {
  return await games.findById(buzzword) === null;
};

const randomBuzzword = () => Array.from(
  { length: 4 },
  () => String.fromCharCode(random.rounded(65, 65 + 26))
);

const getNewGame = buzzword => ({
  buzzword,
  players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
  currentPlayers: [1, 2, 3, 4],
  rounds: [],
});


const gameDocCache = new LRU({ max: 5 });

const gameService = {
  async getFreeBuzzword () {
    for (const buzzword of shuffle(buzzwords)) {
      if (await isBuzzwordFree(buzzword)) {
        return buzzword;
      }
    }

    let buzzword;
    do {
      buzzword = randomBuzzword();
    } while (!(await isBuzzwordFree(buzzword)));

    return buzzword;
  },

  async findOne (buzzword) {
    return gameDocCache.get(buzzword) ||
           await games.findById(buzzword);
  },

  async findOneOrCreate (buzzword) {
    const game = await gameService.findOne(buzzword) ||
                 await games.createWithId(
                   buzzword,
                   getNewGame(buzzword)
                 );
    gameDocCache.set(buzzword, game);
    return game;
  },

  async setPlayers (buzzword, players) {
    const game = await gameService.findOne(buzzword);

    if (!game) throw Error(`Cannot find game '${buzzword}'`);
    if (deepEqual(game.players, players)) return;

    await game.update({ players });
  },
};

export default gameService;
