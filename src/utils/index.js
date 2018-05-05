export const $asleep = (ms) => new Promise(res => setTimeout(res, ms));

export const $random = (
  from = 0,
  to = 1
) => Math.random() * (to - from) + to;

export const randomId = (() => {
  const charCodeOfA = 'A'.charCodeAt(0);
  const charCodeOfZ = 'Z'.charCodeAt(0);
  const charCodeOfa = 'a'.charCodeAt(0);
  const charCodeOfz = 'z'.charCodeAt(0);

  return () => {
  };
})();
