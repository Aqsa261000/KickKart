import React, { useContext, useEffect, useState } from 'react';
import { DefaultLayout } from '../../../layout';
import shoesSide from '../../../../assets/shoesSide.jpg';

import './style.css';
import AuthContext from '../../../../context/auth/authContext';
import AlertContext from '../../../../context/alert/alertContext';
import { BasicAlert } from '../../../common';
import { useNavigate } from 'react-router-dom';
const VerificationDefault = () => {
  const [data, setData] = useState({
    id: '',
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();
  const {
    OTPVerification,
    isAuthenticated,
    error,
    clearErrorHandler,
    otpRequest,
    otpVerify,
  } = authContext;
  const { AlertHandler } = alertContext;
  useEffect(() => {
    if (otpRequest && otpVerify) {
      navigate('/newpassword');
    }
    if (error) {
      AlertHandler(error, 'error');
      clearErrorHandler();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpVerify, error]);
  const onChangeHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    OTPVerification(data);
  };
  return (
    <DefaultLayout>
      <BasicAlert />
      <div className="flex">
        <div className="side1">
          <img src={shoesSide} alt="shoesside" className="image" />
        </div>
        <div className="side2">
          <div className="side2Content">
            <h2 className="heading">Verification</h2>
            <p className="parag">Verify your code.</p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={onSubmitHandler}>
                <label htmlFor="verification">Verification Code</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={data.id}
                  onChange={onChangeHandler}
                />
                <button className="button" type="submit">
                  Verify Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VerificationDefault;
