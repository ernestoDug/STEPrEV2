import { useState, useEffect, useRef } from "react";

import Button from "../Button/Button";

import TimerStyle from "./Timer.module.css";

const Timer = () => {
  const [timer, setTimerr] = useState({ running: false, elapsedTime: 0 });

  const intarval = useRef(null);

  const startTimer = useRef(0);

  useEffect(() => {
    if (timer.running) {
      intarval.current = setInterval(() => {
        setTimerr((prevState) => ({
          ...prevState,
          elapsedTime: Date.now() - startTimer.current,
        }));
      }, 10);
    }
    return () => {
      clearInterval(intarval.current);
    };
  }, [timer.running]);

  const formateTime = () => {
    let hours = Math.floor(timer.elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((timer.elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor(timer.elapsedTime / (1000 % 60));
    let miliSeconds = Math.floor((timer.elapsedTime % 1000) / 1000);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");

    return `${hours}: ${minutes}: ${seconds} ${miliSeconds}`;
  };

  // hahdles
  const start = () => {
    setTimerr((prevState) => ({ ...prevState, running: true }));
  };
  const stop = () => {
    setTimerr((prevState) => ({ ...prevState, running: false }));
  };

  const reset = () => {
    setTimerr((prevState) => ({ ...prevState, elapsedTime: 0 }));

    setTimerr((prevState) => ({ ...prevState, running: false }));
  };

  return (
    <>
      <div className={TimerStyle.clockWrap}>
        <div className={TimerStyle.clock}>
          <span className={TimerStyle.clockDgt}>{formateTime()}</span>
        </div>
        <div className={TimerStyle.controls}>
          <Button
            nameBtn="Старт"
            classNameProps={TimerStyle.btn}
            clickProps={start}
            idProps="btnTimerStart"
          />
          <Button
            nameBtn="Стоп"
            classNameProps={TimerStyle.btn}
            clickProps={stop}
            idProps="btnTimerStop"
          />
          <Button
            nameBtn="Скинути"
            classNameProps={TimerStyle.btn}
            clickProps={reset}
            idProps="btnTimerReset"
          />
        </div>
      </div>
    </>
  );
};

export default Timer;
