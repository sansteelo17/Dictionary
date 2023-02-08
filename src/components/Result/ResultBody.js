import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DictionaryContext from "../../store/dictionary-context";

const ResultBody = ({ result }) => {
  const dictionaryCtx = useContext(DictionaryContext);

  const existingItem = dictionaryCtx.favorites.find(
    (item) => item === result.word
  );

  console.log(existingItem);

  const setFavWordHandler = () => {
    if (!existingItem) {
      dictionaryCtx.addToFav(result.word);
    } else {
      dictionaryCtx.removeFromFav(result.word);
    }
  };

  return (
    <div className="flex-col text-center my-4">
      <div>
        <p className="text-xl px-4 lg:px-8 sm:text-2xl">
          {result.meanings[0].definitions[0].definition}
        </p>
      </div>
      <div className="my-6">
        <button>
          <FontAwesomeIcon
            icon={faStar}
            className={existingItem ? "text-2xl text-amber-400" : "text-2xl"}
            onClick={setFavWordHandler}
          />
        </button>
      </div>
    </div>
  );
};

export default ResultBody;
