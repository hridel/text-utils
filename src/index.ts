/**
 * Capitalize the first letter of a string.
 * @param text
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Capitalize each word in a string.
 * @param text
 */
export function capitalizeEachWord(text: string): string {
  return text.split(' ').map(word => capitalize(word)).join(' ');
}

/**
 * Convert a string to a slug.
 * @param title
 * @param separator
 * @param dictionary
 */
export function slug(
  title: string,
  separator: string = '-',
  dictionary: { [key: string]: string } = {'@': 'at'}
): string {
  title = ascii(title);

  // Convert all dashes/underscores into separator
  const flip = separator === '-' ? '_' : '-';
  const flipRegex = new RegExp(`[${flip}]+`, 'gu');
  title = title.replace(flipRegex, separator);

  // Replace dictionary words
  for (const key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      dictionary[key] = `${separator}${dictionary[key]}${separator}`;
    }
  }

  const dictionaryKeys = Object.keys(dictionary);
  const dictionaryValues = Object.values(dictionary);
  title = dictionaryKeys.reduce((acc, key, index) => {
    return acc.split(key).join(dictionaryValues[index]);
  }, title);

  // Remove all characters that are not the separator, letters, numbers, or whitespace
  const allowedCharsRegex = new RegExp(`[^${separator}\\p{L}\\p{N}\\s]+`, 'gu');
  title = title.toLowerCase().replace(allowedCharsRegex, '');

  // Replace all separator characters and whitespace by a single separator
  const separatorRegex = new RegExp(`[${separator}\\s]+`, 'gu');
  title = title.replace(separatorRegex, separator);

  const trimRegex = new RegExp(`^${separator}+|${separator}+$`, 'gu');
  return title.replace(trimRegex, '');
}

/**
 * Remove accents from a string.
 * @param text
 */
export function ascii(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Removes all HTML tags from the input string and returns plain text.
 *
 * @param html - The HTML string to be stripped of tags.
 * @returns The plain text without any HTML tags.
 */
export function stripHtmlTags(html: string): string {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Shortens the given text to a specified maximum length, ensuring that words are not split.
 *
 * @param text - The text to be shortened.
 * @param maxLength - The maximum length of the shortened text.
 * @param addEllipsis - Optional boolean indicating whether to add ellipsis (…) at the end. Default is true.
 * @returns The shortened text.
 */
export function shortenText(text: string, maxLength: number, addEllipsis: boolean = true): string {
  if (text.length <= maxLength) {
    return text;
  }

  const ellipsis = addEllipsis ? '…' : '';
  const adjustedMaxLength = maxLength - ellipsis.length;

  if (adjustedMaxLength <= 0) {
    return ellipsis;
  }

  const words = text.split(' ');
  let result = '';

  for (const word of words) {
    if ((result + word).length > adjustedMaxLength) {
      break;
    }
    result += (result ? ' ' : '') + word;
  }

  return result + ellipsis;
}

