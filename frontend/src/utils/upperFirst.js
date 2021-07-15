/**
 * Upper first char in string
 *
 * @param {string} str
 * @returns  {string}
 */
export default function upperFirst(str) {
  return `${str.charAt(0).toUpperCase()}${str.split(1)}`;
}
