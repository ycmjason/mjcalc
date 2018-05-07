import { $random } from './index';

export default (() => {
  const charCodeOf = c => c.charCodeAt(0);
  const charCodeOfa = charCodeOf('a');
  const charCodeOfz = charCodeOf('z');
  const randomChar = () => String.fromCharCode($random.rounded(charCodeOfa, charCodeOfz));

  return () => Array.from({ length: 4 }, randomChar).join('');
})();
