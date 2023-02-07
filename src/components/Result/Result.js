import ResultBody from "./ResultBody";
import ResultHead from "./ResultHead";

const Result = ({ result }) => {
  const partOfSpeech = result.meanings.map((meaning) => (
    <span key={Math.random() * 10} className="mr-2">
      {meaning.partOfSpeech}
    </span>
  ));

  console.log(result);

  return (
    <div className="flex-col bg-sky-600 my-8 w-full sm:w-8/12 text-white font-semibold">
      <ResultHead result={result} partOfSpeech={partOfSpeech} />
      <ResultBody result={result} />
    </div>
  );
};

export default Result;
