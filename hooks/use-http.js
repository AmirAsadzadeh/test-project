import { useCallback, useEffect, useState } from "react";

export default function useHttp(url) {
  const [res, setRes] = useState({});
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(url);

    setIsLoading(false);

    if (!response.ok) {
      setIsLoading(false);
      setHasError(true);
      setError("Something went wrong, try again");
    }

    const data = await response.json();

    setRes(data);
  }, [url]);

  useEffect(() => {
    getData().catch((err) => {
      setHasError(err);
      setError(err.message);
      setIsLoading(false);
    });
  }, [setHasError, setError, setIsLoading, getData]);

  return {
    data: res,
    hasError,
    error,
    isLoading,
  };
}
