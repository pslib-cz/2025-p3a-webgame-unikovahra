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
          console.error("Failed to parse JSON:", parseError);
          console.error("Response text (first 200 chars):", text.substring(0, 200));

          if (text.trim().toLowerCase().startsWith("<!doctype html") || text.trim().startsWith("<html")) {
            throw new Error("Server vrátil HTML stránku místo JSON dat. Zkontrolujte, zda je správně nastavená VITE_API_BASE_URL a zda API endpoint existuje.");
          }
          throw new Error("Server vrátil špatný formát dat (nepodařilo se zpracovat JSON).");
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