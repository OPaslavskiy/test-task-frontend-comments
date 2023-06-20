export function firstNameLetters(username) {
  let result = "";

  const words = username.split(" ");
  const firstWord = words[0] || "";
  const secondWord = words[1] || "";
  const processedFirstLetter = firstWord.charAt(0).toUpperCase();
  const processedSecondLetter = secondWord.charAt(0).toUpperCase();

  if (words.length === 1) {
    result = processedFirstLetter;
  } else {
    result = processedFirstLetter + processedSecondLetter;
  }
  return result;
}
