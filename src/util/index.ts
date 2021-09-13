import useSWR from 'swr';

interface FetchError extends Error {
  info: string;
  status: number;
}

/**
 * Fetches a resource and attaches extra info to thrown errors
 * Error handling needs to happen manually.
 *
 * @param args Fetch arguments
 */
const fetcher = async (args: RequestInfo) => {
  const res = await fetch(args);

  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.',
    ) as FetchError;

    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

// eslint-disable-next-line import/prefer-default-export
export const useRequest = <T extends unknown>(
  route: string,
): { isLoading: boolean; isError: any; data: T | undefined } => {
  const { data, error } = useSWR<T>(route, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
