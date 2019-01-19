import { games } from '@/fires';
import { random } from '@/utils';
import { shuffle } from '@/utils/array';
import buzzwords from '@/resources/buzzwords.json';

const isBuzzwordFree = async buzzword => {
  return await games.findById(buzzword) === null;
};

const randomBuzzword = () => Array.from(
  { length: 4 },
  () => String.fromCharCode(random.rounded(65, 65 + 26))
);

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

  async findOneOrCreate (buzzword) {
    return await games.findById(buzzword)
      || await games.createWithId(
        buzzword,
        {
          buzzword,
          players: [],
          rounds: [],
        },
      );
  },
};

export default gameService;
