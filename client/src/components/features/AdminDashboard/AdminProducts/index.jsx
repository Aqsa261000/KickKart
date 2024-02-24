import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useId, useState } from 'react';
import AdminDashboardSideBar from '../../../common/AdminDashboardSideBar';
import AdminProductForm from './AdminProductForm';
import ProductContext from '../../../../context/product/productContext';

import { Button } from '@mui/material';

const AdminProductsDefault = () => {
  const productContext = useContext(ProductContext);
  const { getAllProducts, products, deleteProduct, currentProduct } =
    productContext;
  const [show, setShow] = useState(false);
  // const id = useId();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getAllProducts();
    console.log(getAllProducts());
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
        <AdminProductForm show={show} handleClose={handleClose} />
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Description</th>
                <th scope="col">Product Price</th>
                {/* <th scope="col">Product Images</th> */}

                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <>
                  <tr key={product._id}>
                    <th scope="row">{product._id}</th>
                    <th>{product.brand}</th>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    {/* <td>
                      <img
                        src={`https://5d10-39-50-198-81.ngrok-free.app/uploads/${product.img}`}
                      />
                    </td> */}

                    <td></td>
                    <td>
                      <Button
                        color="success"
                        variant="contained"
                        style={{ fontFamily: 'inherit' }}
                        onClick={() => {
                          currentProduct({
                            _id: product._id,
                            brand: product.brand,
                            category: product.category,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            // img: product.img,
                          });
                          handleShow();
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="error"
                        variant="contained"
                        style={{ fontFamily: 'inherit' }}
                        onClick={() => {
                          deleteProduct(product._id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
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

export default AdminProductsDefault;
