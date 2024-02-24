import React, { useContext, useEffect, useState } from 'react';
import { DefaultLayout } from '../../../layout';
import shoesSide from '../../../../assets/shoe2Side.jpg';
import './style.css';
import AuthContext from '../../../../context/auth/authContext';
import AlertContext from '../../../../context/alert/alertContext';
import { BasicAlert } from '../../../common';
import { useNavigate } from 'react-router-dom';
const ForgetPasswordDefault = () => {
  const [data, setData] = useState({
    email: '',
  });
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();
  const {
    ForgetPasswordHandler,
    isAuthenticated,
    error,
    clearErrorHandler,
    otpRequest,
  } = authContext;
  const { AlertHandler } = alertContext;  
  useEffect(() => {
    if (otpRequest) {
      navigate('/verification');
    }
    if (error) {
      AlertHandler(error, 'error');
      clearErrorHandler();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpRequest, error]);
  const onChangeHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    ForgetPasswordHandler(data);
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
            <h2 className="heading">Reset Your Password</h2>
            <p className="parag">
              Enter your email and we'll send you an OTP code to reset your
              password. Please check it.
            </p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={onSubmitHandler}>
                <label htmlFor="password">Email</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={onChangeHandler}
                />

                <button className="button" type="submit">
                  Send
                </button>
                <a href="#" className="loginback">
                  Back to Login
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ForgetPasswordDefault;
