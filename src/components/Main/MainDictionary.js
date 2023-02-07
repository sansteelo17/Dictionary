import { useState } from "react";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Result from "../Result/Result";
import { fetchResult } from "../../lib/api";

const MainDictionary = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const [result, setResult] = useState(null);

  const [requestSucceeded, setRequestSucceeded] = useState(false);

  const changeValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await fetchResult(enteredValue);

    setResult(data);

    setRequestSucceeded(true);

    setEnteredValue("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-8 sm:px-0">
      <h1 className="text-white text-center mt-8 text-2xl lg:text-3xl">
        STEELO DICTIONARY
      </h1>
      <div className="mt-10 flex flex-col">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556696863-6c5eddae0f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRpY3Rpb25hcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="book"
            className="w-96"
          />
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex mt-8">
            <input
              type="text"
              className="w-full py-2 rounded-l outline-none px-4 focus:bg-sky-300"
              onChange={changeValueHandler}
              value={enteredValue}
            />
            <button className="py-4 pl-4 pr-6 bg-sky-600 text-white rounded-r">
              <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          </div>
        </form>
      </div>
      {requestSucceeded && <Result result={result} />}
    </div>
  );
};

export default MainDictionary;
