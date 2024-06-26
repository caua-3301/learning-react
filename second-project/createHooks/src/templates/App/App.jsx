import { lazy, Suspense, useState } from 'react';

const Component = lazy(() => demora(import('./Other')));

export default function App() {
  const [lo, setLo] = useState(false);

  const handleClick = () => {
    setLo(!lo);
  };

  return (
    <section>
      {lo && (
        <Suspense fallback={<p>Loading...</p>}>
          <Component>Tento do componente que carregou</Component>
        </Suspense>
      )}

      <button onClick={handleClick}>Call</button>
    </section>
  );
}

const demora = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};
