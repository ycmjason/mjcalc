export const $asleep = (ms) => new Promise(res => setTimeout(res, ms));

export const $random = (from = 0, to = 1) => Math.random() * (to - from) + from;

$random.rounded = (from = 0, to = 1) => Math.round($random(from, to));
