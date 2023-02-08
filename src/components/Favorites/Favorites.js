import { Fragment, useContext } from "react";
import DictionaryContext from "../../store/dictionary-context";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
  const dictionaryCtx = useContext(DictionaryContext);

  return (
    <Fragment>
      <h1 className="text-white text-center my-5 text-2xl font-bold">
        Your Favorite Words
      </h1>
      {dictionaryCtx.favorites &&
        dictionaryCtx.favorites.map((item) => (
          <FavoriteItem key={Math.random() * 1000} word={item} />
        ))}
      {dictionaryCtx.favorites.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-red-500 text-2xl px-8 sm:px-0">
            You have no favorite words! Star your favorite words to see them
            here.
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Favorites;
