import { useCounterContext } from '../context/CounterContext';

export const Header = () => {
  const [state, actions] = useCounterContext();

  return <header>Contador: {state.counter}</header>;
};
