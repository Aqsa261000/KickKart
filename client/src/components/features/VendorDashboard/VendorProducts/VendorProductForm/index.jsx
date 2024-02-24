import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useContext, useEffect, useState } from 'react';

import ProductContext from '../../../../../context/product/productContext';
import AlertContext from '../../../../../context/alert/alertContext';
import { Button, Form, Modal } from 'react-bootstrap';
import { BasicAlert } from '../../../../common';

const VendorProductForm = ({ show, handleClose }) => {
  const productContext = useContext(ProductContext);
  const alertContext = useContext(AlertContext);
  const { AlertHandler } = alertContext;
  const { addProduct, currentProductData, clearCurrentProduct, updateProduct } =
    productContext;
  const [productData, setProductData] = useState({
    brand: '',
    category: '',
    name: '',
    description: '',
    price: '',
    // images: '',
  });

  useEffect(() => {
    setProductData({
      brand: currentProductData?.brand ?? '',
      category: currentProductData?.category ?? '',
      name: currentProductData?.name ?? '',
      description: currentProductData?.description ?? '',
      price: currentProductData?.price ?? '',
      // images: currentProductData?.images ?? '',
    });
  }, [currentProductData]);
  const onChangeHandler = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // console.log(productData);
  };

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    // // setProductData(productData);
    // // console.log('vv', productData);
    // addProduct(productData);

    e.preventDefault();

    if (
      !productData.category ||
      !productData.name ||
      !productData.description ||
      !productData.price
    ) {
      AlertHandler('Please enter all the required fields', 'error');
    } else {
      currentProductData !== null
        ? updateProduct({ _id: currentProductData._id, ...productData })
        : addProduct(productData);

      clearCurrentProduct();
      handleClose();
    }
    setProductData({
      brand: '',
      category: '',
      name: '',
      description: '',
      price: '',
      // images: '',
    });
    // handleClose();
  };
  return (
    <>
      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ border: 'none', backgroundColor: 'transparent' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form style={{ padding: '10px 20px' }} onSubmit={onSubmitHandler}>
              <div class="form-group row" style={{ marginBottom: '20px' }}>
                <label for="brand" class="col-sm-2 col-form-label">
                  Brand
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="brand"
                    placeholder="Brand Name"
                    required
                    name="brand"
                    value={productData.brand}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div class="form-group row" style={{ marginBottom: '20px' }}>
                <label for="category" class="col-sm-2 col-form-label">
                  Category
                </label>
                <div class="col-sm-10">
                  <select
                    placeholder="Select category"
                    name="category"
                    value={productData.category}
                    onChange={onChangeHandler}
                    className="form-control"
                    id="category"
                    required
                    style={{ color: 'grey' }}
                  >
                    <option disabled>Select Category</option>
                    <option value="Sports">Sports</option>
                    <option value="Casuals">Casuals</option>
                    <option value="Formals">Formals</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">
                  Product Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Product Name"
                    required
                    name="name"
                    value={productData.name}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">
                  Product Description
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Product Description"
                    required
                    name="description"
                    value={productData.description}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="price" class="col-sm-2 col-form-label">
                  Product Price
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="Product Price"
                    required
                    name="price"
                    value={productData.price}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="images" class="col-sm-2 col-form-label">
                  Product Image/s
                </label>
                <div class="col-sm-10">
                  <input
                    type="file"
                    class="form-control"
                    id="images"
                    placeholder="Product Images"
                    required
                    name="images"
                    value={productData.images}
                    multiple
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="quantity" class="col-sm-2 col-form-label">
                  Product Quantity
                </label>
                <div class="col-sm-10">
                  <input
                    type="quantity"
                    class="form-control"
                    id="quantity"
                    placeholder="Product Quantity"
                    required
                    name="quantity"
                    value={productData.quantity}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  style={{
                    backgroundColor: 'grey',
                    color: 'white',
                    fontWeight: '500',
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    backgroundColor: '#8a33fd',
                    color: 'white',
                    fontWeight: '500',
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <BasicAlert />
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Label style={{ marginTop: '10px' }}>Brand Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Brand name"
                name="brand"
                value={productData.brand}
                onChange={onChangeHandler}
                id="brand"
              ></Form.Control>
            </Form.Group>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Label>Category Name</Form.Label>
              <Form.Select
                type="text"
                aria-label="Select Category"
                onChange={onChangeHandler}
                name="category"
                value={productData.category}
                id="category"
              >
                <option>Select Category</option>
                <option value="Sports">Sports</option>
                <option value="Casuals">Casuals</option>
                <option value="Formals">Formals</option>
              </Form.Select>
            </Form.Group>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Product Name"
                name="name"
                value={productData.name}
                onChange={onChangeHandler}
                id="name"
              ></Form.Control>
            </Form.Group>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                placeholder="Enter your Product Description"
                name="description"
                value={productData.description}
                onChange={onChangeHandler}
                id="description"
              ></Form.Control>
            </Form.Group>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Product Price"
                name="price"
                value={productData.price}
                onChange={onChangeHandler}
                id="price"
              ></Form.Control>
            </Form.Group>
            {/* <Form.Group
              style={{ marginTop: '10px' }}
              controlId="formFileMultiple"
            >
              <Form.Label>Product Images</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter your Product Quantity"
                name="images"
                // value={productData.images}
                onChange={onChangeHandler}
                multiple
                id="images"
              ></Form.Control>
            </Form.Group> */}

            <Button variant="secondary">Close</Button>
            <Button type="submit" variant="primary">
              {currentProductData ? 'Update Product' : 'Add Product'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VendorProductForm;
