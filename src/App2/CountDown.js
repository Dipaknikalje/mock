import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  //   const [msec, setMsec] = useState(0);
  const [pause, setPause] = useState(true);

  function startClock() {
    setPause(false);
  }
  function stopClock() {
    setPause(true);
  }
  function restartClock() {
    setHour(0);
    setMin(0);
    setSec(0);
    // setMsec(0);
  }
  useEffect(() => {
    let interval = null;
    if (!pause) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          clearInterval(interval);
        }
        if (sec <= 59) {
          setSec(sec + 1);
          clearInterval(interval);
        }
        // if (msec > 99) {
        //   setSec(sec + 1);
        //   setMsec(0);
        //   clearInterval(interval);
        // }
        // if (msec <= 99) {
        //   setMsec(msec + 10);
        //   clearInterval(interval);
        // }
      }, 1000);
    }
  });
  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>
        {hour}:{min}:{sec}
      </h1>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Pause</button>
      <button onClick={restartClock}>Restart</button>
    </div>
  );
};

export default CountDown;
