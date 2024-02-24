import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useId, useState } from 'react';
import AdminDashboardSideBar from '../../../common/AdminDashboardSideBar';

import ProductContext from '../../../../context/product/productContext';

import { Button } from '@mui/material';
import OrderContext from '../../../../context/order/orderContext';

const AdminOrdersDefault = () => {
  const orderContext = useContext(OrderContext);
  const { getAllOrders, orders } = orderContext;
  const [show, setShow] = useState(false);
  // const id = useId();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getAllOrders();
    // console.log(getAllOrders());
  }, []);
  return (
    <>
      <AdminDashboardSideBar>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{
              color: 'white',
              backgroundColor: '#8a33fd',
              borderRadius: '10px',
              fontWeight: 500,
              border: '#8a33fd',
              padding: '10px 20px',
              margin: '20px 20px',
            }}
          >
            Add Product
          </button> */}
          <Button
            variant="primary"
            onClick={handleShow}
            type="button"
            // data-toggle="modal"
            // data-target="#exampleModal"
            style={{
              color: 'white',
              backgroundColor: '#8a33fd',
              borderRadius: '10px',
              fontWeight: 600,
              border: '#8a33fd',
              padding: '10px 20px',
              margin: '20px 20px',
              fontFamily: 'inherit',
            }}
          >
            Add Product
          </Button>
        </div>

        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Shipping Address</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Amount</th>

                
              </tr>
            </thead>
            <tbody>
              {orders.map((product) => (
                <>
                  <tr key={product._id}>
                    <th scope="row">{product._id}</th>
                    <td>{product.productId}</td>
                    <td>{product.customerId}</td>
                    <td>{product.shippingAddress}</td>
                    <td>{product.paymentMethod}</td>
                    <td>{product.amount}</td>

                    
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </AdminDashboardSideBar>
    </>
  );
};

export default AdminOrdersDefault;
