import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const createUser = (users) => {
    dispatch({
      type: "ADD_USER",
      payload: users,
    });
  };
  const removeUser = (users) => {
    dispatch({
      type: "DELETE_USER",
      payload: users,
    });
  };
  const editUser = (users) => {
    dispatch({ type: "EDIT_USER", payload: users });
  };
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        createUser,
        removeUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default {
  GlobalContext,
  GlobalProvider,
};
