import React, { useState } from "react";

const favorites =
  localStorage.getItem("favWords") !== null
    ? JSON.parse(localStorage.getItem("favWords"))
    : [];

const DictionaryContext = React.createContext({
  favorites: favorites,
  addToFav: (word) => {},
  removeFromFav: (word) => {},
});

export const DictionaryProvider = (props) => {
  const [favoriteWords, setFavoriteWords] = useState(favorites);

  const addToFavHandler = (word) => {
    setFavoriteWords((prevState) => [...prevState, word]);
  };

  localStorage.setItem("favWords", JSON.stringify(favoriteWords));

  const removeFromFavHandler = (word) => {
    const newFavWords = favoriteWords.filter((words) => words !== word);
    setFavoriteWords(newFavWords);
  };

  const dictionaryCtxValue = {
    favorites: favoriteWords,
    addToFav: addToFavHandler,
    removeFromFav: removeFromFavHandler,
  };

  return (
    <DictionaryContext.Provider value={dictionaryCtxValue}>
      {props.children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryContext;
