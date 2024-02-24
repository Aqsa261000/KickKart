import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { CLEAR_ALERT, SET_ALERT } from '../type';
import useId from '@mui/material/utils/useId';

const AlertState = ({ children }) => {
  const initialState = [];
  const alertId = useId();

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const AlertHandler = (msg, type, timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
        id: alertId + msg,
      },
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
        payload: alertId + msg,
      });
    }, timeout);
  };
  return (
    <AlertContext.Provider value={{ alerts: state, AlertHandler }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
