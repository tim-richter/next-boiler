import { mutate } from 'swr';
import { useRequest } from '@util';

/**
 * This component is generated as an example for useSWR hook
 *
 * To learn more about SWR and data fetching,
 * please visit https://swr.vercel.app/
 */

const API_URL =
  'https://official-joke-api.appspot.com/jokes/programming/random';

const SWRExample = () => {
  const { data } =
    useRequest<{ id: string; setup: string; punchline: string }[]>(API_URL);

  const refetch = () => {
    mutate(API_URL);
  };

  if (data) {
    return (
      <div>
        <header>
          <h2>SWR Data Fetching Example</h2>
        </header>
        <main>
          <p>Programmer Jokes {`#${data[0].id}`}</p>
          <p>{data[0].setup}</p>
          <p>{data[0].punchline}</p>
          <p>
            <button type="button" onClick={refetch}>
              Give me another
            </button>
          </p>
        </main>
        <footer>
          <a
            href="https://swr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Documentation
          </a>
        </footer>
      </div>
    );
  }

  return null;
};

export default SWRExample;
