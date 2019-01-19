import { random } from './index';

export const shuffle = xs => sort(xs, () => random(-0.5, 0.5));

export const sort = ([...xs], ...args) => xs.sort(...args);

export const pickRandom = xs => xs[random.rounded(0, xs.length - 1)];
