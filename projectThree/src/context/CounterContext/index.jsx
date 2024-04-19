import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { bulildActions } from './buildActions';
import { reducer } from './reducer';
import PropTypes from 'prop-types';

const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //para actions não re-renderizar com o useRef
  const actions = bulildActions(dispatch);

  return (
    <Context.Provider value={[state, actions]}>{children}</Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node,
};

//retorna o contexto de forma autmática sem necessidade do dev usa useContext
export const useCounterContext = () => {
  const context = useContext(Context);

  return [...context];
};
