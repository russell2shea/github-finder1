import React, { useReducer } from "react";
import AlertConext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type
      }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  // make it available to entire app
  return (
    <AlertConext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertConext.Provider>
  );
};

export default AlertState;
