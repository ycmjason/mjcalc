export const $asleep = (ms) => new Promise(res => setTimeout(res, ms));

export const $random = (
  from = 0,
  to = 1,
) => Math.random() * (to - from) + to;

export const randomId = (() => {
  const charCodeOf = c => c.charCodeAt(0);
  const charCodeOfA = charCodeOf('A');
  const charCodeOfZ = charCodeOf('Z');
  const randomChar = () => String.fromCharCode($random(charCodeOfA, charCodeOfZ));

  return () => Array.from({ length: 4 }, randomChar);
})();
