export const fetchResult = async (enteredValue) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredValue}`
  );

  const data = await response.json();

  return data[0];
};
