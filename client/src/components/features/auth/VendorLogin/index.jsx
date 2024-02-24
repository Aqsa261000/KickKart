import React, { useContext, useEffect, useState } from 'react';
import img from '../../../../assets/sneaker.jpg';
import { Link } from 'react-router-dom';
import './style.css';
import AuthContext from '../../../../context/auth/authContext';
import AlertContext from '../../../../context/alert/alertContext';
import { BasicAlert } from '../../../common';
import { useNavigate } from 'react-router-dom';
const VendorLoginDefault = () => {
  const [signin, setSignin] = useState({
    email: '',
    password: '',
  });
  const { email, password } = signin;
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { SignInVendorHandler, error, clearErrorHandler, isAuthenticated } =
    authContext;
  const { AlertHandler } = alertContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/vendorhome');
    }
    if (error) {
      AlertHandler(error, 'error');
    }
    clearErrorHandler();
  }, [error, isAuthenticated]);

  const onChangeHandler = (e) => {
    setSignin((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(signin);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      AlertHandler('Please fill all the required fields', 'error');
    } else {
      // try {
      //   const response = await SignInUserHandler(signin);
      //   console.log(response);

      //   const tokenExist = response?.data?.token;
      //   console.log('te', tokenExist);
      //   if (!tokenExist) {
      //     AlertHandler('Please write the correct credentials', 'error');
      //   }

      //   // SignInUserExists();
      //   else {
      //     SignInUserHandler(signin);
      //   }
      // } catch (error) {
      //   console.log('error occured', error);
      // }
      SignInVendorHandler(signin);
    }
  };
  return (
    <section className="fullcontainer">
      <BasicAlert />
      <div className="sigin-registeration-form">
        <div className="column-1">
          <h2 className="signinHeader">Vendor Login</h2>
          <h4 className="signinsubHeading">Welcome back!</h4>
          <form
            id="signinForm"
            className="flexx flex-col"
            onSubmit={onSubmitHandler}
          >
            {/* <input  type='text' placeholder='Type your Full Name' /> */}
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              id="email"
              value={signin.email}
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              id="password"
              value={signin.password}
              onChange={onChangeHandler}
            />
            {/* <i className="fa-regular fa-eye eye-icon2"></i> */}
            <Link
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                fontSize: '12px',
                color: 'black',
              }}
              to={'/forgetpassword'}
            >
              Forget Password?
            </Link>
            <button className="btn" type="submit">
              Login
            </button>
          </form>
          <p className="flexx2">
            Don't have an Account?{' '}
            <Link to="/vendorsignup" className="linkk">
              {' '}
              Register
            </Link>
          </p>
          <p style={{ textAlign: 'center', fontWeight: 700 }}>OR</p>

          <Link to={'/login'} className="linkItems">
            Login as User?
          </Link>
        </div>
        <div className="col-2">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default VendorLoginDefault;
