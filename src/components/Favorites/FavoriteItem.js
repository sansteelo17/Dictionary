import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DictionaryContext from "../../store/dictionary-context";

const FavoriteItem = ({ word }) => {
  const dictionaryCtx = useContext(DictionaryContext);

  const removeFromFavHandler = () => {
    dictionaryCtx.removeFromFav(word);
  };

  return (
    <div className="flex-col bg-sky-600 w-2/4 sm:w-1/4 mx-auto my-2 rounded py-2 text-white">
      <div className="flex font-semibold px-4">
        <h1 className="mx-auto pl-8 lg:pl-14">{`${word}`.toUpperCase()}</h1>
        <button
          className="ml-auto hover:text-red-600"
          onClick={removeFromFavHandler}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
