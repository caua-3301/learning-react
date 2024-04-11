import { createContext, useReducer, useState } from 'react';
import P from 'prop-types';

const data = {
  title: 'titulo',
  body: 'corpo',
};

const Component = () => {
  const { state, dispath } = useReducer(Context);

  return (
    <section onClick={() => dispath({ type: 'change' })}>
      {state.body} {state.body}
    </section>
  );
};

const Context = createContext();

ContextApp.propTypes = {
  children: P.node,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      return { ...state, body: 'corpo alterado' };
    }
  }
  return { ...state };
};

const ContextApp = ({ children }) => {
  const [state, dispath] = useReducer(reducer, data);

  return (
    <Context.Provider value={{ state, dispath }}>{children}</Context.Provider>
  );
};

export default function App() {
  return (
    <ContextApp>
      <Component />
    </ContextApp>
  );
}
