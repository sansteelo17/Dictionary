import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResultBody = ({ result }) => {
  return (
    <div className="flex-col text-center my-4">
      <div>
        <p className="text-xl px-4 lg:px-8 sm:text-2xl">
          {result.meanings[0].definitions[0].definition}
        </p>
      </div>
      <div className="my-4">
        <button>
          <FontAwesomeIcon icon={faStar} className="" />
        </button>
      </div>
    </div>
  );
};

export default ResultBody;
