import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dailog = useRef();

  // const [tStarted, SetTStarted] = useState(false);
  // const [tExp, SetTExp] = useState(false);
  const [tRem, SetTRem] = useState(targetTime * 1000);
  const isTActive = tRem > 0 && tRem < targetTime * 1000;

  if (tRem <= 0) {
    clearInterval(timer.current);
    SetTRem(targetTime * 1000);
    dailog.current.openForMe();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      SetTRem((prevTRem) => prevTRem - 10);
    }, 10);
  };

  const handleStop = () => {
    dailog.current.openForMe();
    clearInterval(timer.current);
  };
  const handleReset = () => {
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dailog}
        targetTime={targetTime}
        remainingTime={tRem}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTActive ? handleStop : handleStart}>
            {isTActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={isTActive ? "active" : "undefined"}>
          {isTActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
