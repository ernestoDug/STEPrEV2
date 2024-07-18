import { useState, useEffect } from "react";

import clockStyle from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formateTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meredian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${addZero(hours)}: ${addZero(minutes)}: ${addZero(
      seconds
    )} ${meredian}`;
  };

  //   +0+++++++++++++++++++++++++++++++++++++++++++++++++++++++++0
  const addZero = (number) => {
    return (number < 10 ? "0" : null) + number;
  };
  return (
    <>
      <div className={clockStyle.clockWrap}>
        <div className={clockStyle.clock}>
          <span className={clockStyle.clockDgt}>{formateTime()}</span>
        </div>
      </div>
    </>
  );
};

export default Clock;
