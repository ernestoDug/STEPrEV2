import { useCallback, useRef } from "react";

const useDebounce = (callback, interval = 5000) => {
    const prevTimeoutIdRef = useRef();
    console.log(interval, 88888888888888)
  
    return useCallback(
      (...args) => {
        clearTimeout(prevTimeoutIdRef.current);
        prevTimeoutIdRef.current = setTimeout(() => {
          clearTimeout(prevTimeoutIdRef.current);
          callback(...args);
        }, interval);
      },
      [callback, interval]
    );
  };

  export default useDebounce;