import { useContext } from 'react';
import { FistContext } from '../../context/App';

//eslint-disable-next-line
export const Title = ({ children }) => {
  const { state, setState } = useContext(FistContext);

  const handleClick = () => {
    console.log('foi');
    setState({ ...state, counter: state.counter + 1 });
  };

  return (
    <p onClick={handleClick}>
      {children} {state.body}
    </p>
  );
};

/*quando um estado é setado (nao importa onde) seu valor é atualizado em toda a árvore, seja o item filho ou pai do elemento que o alterou*/
