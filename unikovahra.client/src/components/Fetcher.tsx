import { useEffect, useState, type ReactNode } from "react";

type FetcherResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type FetcherProps<T> = {
  url: string;
  dependencies?: any[];
  children: (result: FetcherResult<T>) => ReactNode;
};

export const Fetcher = <T,>({ url, dependencies = [], children }: FetcherProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching from URL:", url);
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Chyba ${response.status}`);
        }

        const text = await response.text();
        try {
          const result: T = JSON.parse(text);
          setData(result);
        } catch (parseError) {
          console.error("Failed to parse JSON:", parseError, "Response text starts with:", text.substring(0, 100));
          throw new Error("Server vrátil špatný formát dat (pravděpodobně HTML místo JSON).");
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
  }, [url, ...dependencies]);

  return <>{children({ data, loading, error })}</>;
};