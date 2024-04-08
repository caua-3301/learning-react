import { useContext } from 'react';
import { FistContext } from '../../context/App';

//eslint-disable-next-line
export const Section = ({ children }) => {
  const {
    state: { counter },
  } = useContext(FistContext);

  return (
    <section>
      {children} {counter}
    </section>
  );
};
