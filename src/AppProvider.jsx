import { createContext, useContext, useReducer } from 'react';

import reducer from './reducer';

const AppContext = createContext();

const initialState = { userInfo: { initial: 'some value' } };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userDispatch = (userData) => {
    dispatch({ type: 'USER', payload: userData });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        userDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
