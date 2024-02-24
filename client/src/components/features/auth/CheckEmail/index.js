import React from 'react';
import { DefaultLayout } from '../../../layout';
import shoesSide from '../../../../assets/shoe3Side.jpg';
import './style.css';
import left from '../../../../assets/left.svg';
const CheckEmailDefault = () => {
  return (
    <DefaultLayout>  
      <div className="flex">
        <div className="side1">
          <img src={shoesSide} alt="shoesside" className="image" />
        </div>
        <div className="side2">
          <div className="side2Content">
            <h2 className="heading">Check Email</h2>
            <p className="parag">
              Please check your email inbox and click on the provided link to
              reset your password . If you don’t receive email,
              <a href="#" className="link">
                {' '}
                Click here to resend
              </a>
            </p>

            <div className="back">
              <a href="#" className="back">
                <img src={left} alt="left" />
                <p>Back to login</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CheckEmailDefault;
