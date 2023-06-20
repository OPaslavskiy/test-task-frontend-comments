export function firstNameLetters(username) {
  const words = username.split(" ");
  const firstWord = words[0] || "";
  const secondWord = words[1] || "";
  const processedFirstLetter = firstWord.charAt(0).toUpperCase();
  const processedSecondLetter = secondWord.charAt(0).toUpperCase();
  let result = "";
  if (words.length === 1) {
    result = processedFirstLetter;
  } else {
    result = processedFirstLetter + processedSecondLetter;
  }
  return result;
}
