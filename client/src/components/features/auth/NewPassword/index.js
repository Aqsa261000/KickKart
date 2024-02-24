import React, { useContext, useEffect, useState } from 'react';
import { DefaultLayout } from '../../../layout';
import shoesSide from '../../../../assets/shoe1Side.jpg';
// import hide from '../../../../assets/hide.png';
import './style.css';
import AuthContext from '../../../../context/auth/authContext';
import AlertContext from '../../../../context/alert/alertContext';
// import { useNavigate } from 'react-router-dom';
import { BasicAlert } from '../../../common';

const NewPasswordDefault = () => {
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  // const navigate = useNavigate();
  const {
    error,
    clearErrorHandler,
    otpRequest,
    otpVerify,
    ChangePassword,
    changePass,
  } = authContext;
  const { AlertHandler } = alertContext;
  useEffect(() => {
    if (changePass) {
      // console.log(otpRequest, otpVerify, changePass);
      AlertHandler('Password is resetted successfully', 'success');
      // navigate('/login');
    }
    if (error) {
      AlertHandler(error, 'error');
      clearErrorHandler();
    }
    // eslint-disable-next-line
  }, [changePass, error]);
  const onChangeHandler = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    if (!data.password || !data.confirmPassword) {
      AlertHandler('Please fill the required field', 'error');
    } else if (data.password !== data.confirmPassword) {
      AlertHandler('Password does not match', 'error');
    } else if (data.password.length < 6 || data.confirmPassword.length < 6) {
      AlertHandler('Password should be more than 6 characters');
    }
    e.preventDefault();
    console.log(data);
    ChangePassword(data);
    // OTPVerification(data);
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
            <h2 className="heading">Create New Password</h2>
            <p className="parag">
              Your new password must be different from previous used passwords.
            </p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={onSubmitHandler}>
                <label htmlFor="password">Password</label>
                <div className="newPass">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={onChangeHandler}
                  />
                  {/* <button className="hideBtn">
                    <img src={hide} alt="hide" className="hide" />
                  </button> */}
                </div>

                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={data.confirmPassword}
                  onChange={onChangeHandler}
                />
                {/* <p className="paraRed hidden">
                  New password and comfirm new password do not match
                </p> */}

                <button className="button" type="submit">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewPasswordDefault;
