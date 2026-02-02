import { useEffect, useState, type ReactNode } from "react";

type FetcherResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type FetcherProps<T> = {
  url: string;
  dependencies?: unknown[];
  children: (result: FetcherResult<T>) => ReactNode;
};

export const Fetcher = <T,>({ url, dependencies = [], children }: FetcherProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Chyba ${response.status}`);
        }

      

      } catch (e) {
        setData(null);

        if (e instanceof Error) setError(e);
        else setError(new Error("Neznámá chyba"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...dependencies]);

  return <>{children({ data, loading, error })}</>;
};