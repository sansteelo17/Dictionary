import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResultHead = ({ result, partOfSpeech }) => {
  const playAudioHandler = () => {
    const audio = new Audio(result.phonetics[0].audio);

    audio.play();
  };

  return (
    <div className="flex-col">
      <div className="text-center text-xl sm:text-2xl my-4 px-2">
        <span>{`${`${result.word}`.toUpperCase()}`}</span>
        <span className="text-sm block mx-auto mt-1">
          (
          {result.phonetics[0].text
            ? result.phonetics[0].text
            : result.phonetics[1].text}
          )
        </span>
        <button
          className="text-lg block mx-auto my-3 bg-white text-sky-600 py-1 px-3 rounded"
          onClick={playAudioHandler}
        >
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
      </div>
      <div className="text-center">{partOfSpeech}</div>
    </div>
  );
};

export default ResultHead;
