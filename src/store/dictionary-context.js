import React, { useState } from "react";

const DictionaryContext = React.createContext({
  favorites: [],
  addToFav: (word) => {},
  removeFromFav: (word) => {},
});

export const DictionaryProvider = (props) => {
  const [favoriteWords, setFavoriteWords] = useState([]);

  const addToFavHandler = (word) => {
    setFavoriteWords((prevState) => [...prevState, word]);
  };

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
