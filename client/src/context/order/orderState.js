import React, { useId, useReducer } from 'react';
import OrderContext from './orderContext';
import reducerMethod from './orderReducer';
import {
  ADD_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  CURRENT_PRODUCT,
  DELETE_PRODUCT,
  GET_ORDERS,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
} from '../type';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
// import OrderContext from './orderContext';

const OrderState = ({ children }) => {
  const id = useId();
  const initialState = {
    orders: [],
  };

  const [state, dispatch] = useReducer(reducerMethod, initialState);

  //   const getAllProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://127.0.0.1:8080/api/products/products/'
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const allproducts = await response.json();
  //       setProducts(allproducts);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  // get products
  const getAllOrdersHandler = async () => {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    try {
      const res = await axios.get('/api/orders');

      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      console.error('Error Response:', err.response);
    }
  };

  //   // filter contact
  //   const searchContactsHandler = (text) => {
  //     dispatch({
  //       type: SEARCH_CONTACT,
  //       payload: text,
  //     });
  //   };

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,

        getAllOrders: getAllOrdersHandler,

        // searchContacts: searchContactsHandler,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderState;
