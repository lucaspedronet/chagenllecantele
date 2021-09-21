import { useCallback, useEffect } from 'react';

function useDebounce(time: number, getLocation: Function) {
  const execute = useCallback(() => {
    return setInterval(() => {
      getLocation();
    }, time);
  }, [getLocation, time]);

  useEffect(() => {
    const handleInterval = execute();
    console.log('chegou aqui');

    return () => {
      clearInterval(handleInterval);
    };
  }, [execute]);
}

export { useDebounce };
