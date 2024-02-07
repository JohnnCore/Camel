import { createContext, useMemo, useReducer, useEffect } from "react";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || null;
};

const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};

const initAuthState = { token: getTokenFromLocalStorage() };

const REDUCER_ACTION_TYPE = {
  SET_TOKEN: "SET_TOKEN",
  REMOVE_TOKEN: "REMOVE_TOKEN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_TOKEN: {
      if (!action.payload) {
        throw new Error("action.payload missing in SET_TOKEN");
      }

      const { token } = action.payload;
      console.log(token);
      saveTokenToLocalStorage(token);

      return {
        ...state,
        token: token,
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE_TOKEN: {
      removeTokenFromLocalStorage();

      return {
        ...state,
        token: null,
      };
    }

    default:
      throw new Error("Undefined reducer action type");
  }
};

const useAuthContext = (initAuthState) => {
  const [state, dispatch] = useReducer(reducer, initAuthState);

  const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

  return { dispatch, REDUCER_ACTIONS, token: state.token };
};

const initAuthContextState = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  token: null,
};

export const AuthContext = createContext(initAuthContextState);

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthContext(initAuthState)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
