import { useEffect } from 'react';
import { useCounterContext } from '../../context/CounterContext';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export default function App() {
  const [state, actions] = useCounterContext();

  console.log(actions);
  console.log(state.counter);

  return (
    <section>
      <Header />
      <Button onButtonClick={() => actions.increase()} />
    </section>
  );
}
