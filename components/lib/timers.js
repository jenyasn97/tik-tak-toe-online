import { useEffect, useState } from "react";

export function useNow(interval, enebled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enebled) {
      setNow(undefined);
      return;
    }
    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enebled]);
  return now;
}

export function useInterval(interval, enebled, cb) {
  useEffect(() => {
    if (!enebled) {
      return;
    }
    const int = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
    //TODO useCallback
  }, [interval, enebled, cb]);
}
