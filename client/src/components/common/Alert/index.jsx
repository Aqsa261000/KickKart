import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import AlertContext from '../../../context/alert/alertContext';

const BasicAlert = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    <>
      {alerts &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <Alert key={`${alert.type}-${alert.msg}`} severity={alert.type}>
            {alert.msg}
          </Alert>
        ))}
    </>
  );
};

export default BasicAlert;
