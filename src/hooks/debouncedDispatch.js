import { useState, useCallback } from 'react';

const useDebouncedDispatch = (dispatch, delay) => {
  const [debouncing, setDebouncing] = useState(false);

  const debouncedDispatch = useCallback(
    (action) => {
      if (debouncing) return;
      setDebouncing(true);
      dispatch(action);
      setTimeout(() => {
        setDebouncing(false);
      }, delay);
    },
    [dispatch, delay, debouncing]
  );

  return debouncedDispatch;
};

export default useDebouncedDispatch;