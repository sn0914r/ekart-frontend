import { useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const useUpdateSearchParams = (delay = 300) => {
  const [, setSearchParams] = useSearchParams();
  const timerRef = useRef(null);

  const updateParams = useCallback(
    (newParams) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setSearchParams((prev) => {
          const params = Object.fromEntries(prev);

          Object.entries(newParams).forEach(([key, value]) => {
            if (value === null || value === undefined || value === "") {
              delete params[key];
            } else {
              params[key] = String(value);
            }
          });

          return params;
        });
      }, delay);
    },
    [delay, setSearchParams],
  );

  return updateParams;
};

export default useUpdateSearchParams;
