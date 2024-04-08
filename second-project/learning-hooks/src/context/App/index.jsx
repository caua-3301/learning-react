import { createContext, useState } from 'react';
import { itens } from './data';

export const FistContext = createContext();

//eslint-disable-next-line
export default function AppContext({ children }) {
  const [state, setState] = useState(itens);

  //podemos passar funções que setem itens especificos do estado, aqui não fazemos isso
  return (
    <FistContext.Provider value={{ state, setState }}>
      {children}
    </FistContext.Provider>
  );
}
