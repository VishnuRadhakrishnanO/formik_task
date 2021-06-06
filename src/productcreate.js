import {  useFormik } from 'formik';
import { Link } from 'react-router-dom';
export default function ProductCreate() {
  let ProductSubmit = async (values) => {
    alert('New Product is added');

    let { ProductName, Productdetails, Price, Productpurchase, Productex } =
      values;

    await fetch('https://5ff9537617386d0017b51c4a.mockapi.io/test/users', {
      method: 'POST',
      body: JSON.stringify({
        ProductName,
        Productdetails,
        Price,
        Productpurchase,
        Productex,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  let validate = (values) => {
    const errors = {};
    if (!values.ProductName) {
      errors.ProductName = 'Required';
    }
    if (!values.Productdetails) {
      errors.Productdetails = 'Required';
    }
    if (!values.Price) {
      errors.Price = 'Required';
    }
    if (!values.Productpurchase) {
      errors.Productpurchase = 'Required';
    }
    if (!values.Productex) {
      errors.Productex = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      ProductName: '',
      Productdetails: '',
      Price: '',
      Productpurchase: '',
      Productex: '',
    },
    validate,
    onSubmit: (values) => {
      ProductSubmit(values);
    },
  });

  return (
    <>
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Product Form</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <label>ProductName</label>
              <input
                className='form-control'
                name='ProductName'
                value={formik.values.ProductName}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.ProductName ? (
                <span class='text-danger'>Enter Product Name</span>
              ) : null}
            </div>

            <div className='col-lg-6'>
              <label>Product Details</label>
              <input
                className='form-control'
                name='Productdetails'
                value={formik.values.Productdetails}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.Productdetails ? (
                <span class='text-danger'>Enter Productdetails</span>
              ) : null}
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <label>Price</label>
              <input
                className='form-control'
                name='Price'
                value={formik.values.Price}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.Price ? (
                <span class='text-danger'>Enter Price</span>
              ) : null}
            </div>

            <div className='col-lg-6'>
              <label>Product Purchase date</label>
              <input
                className='form-control'
                name='Productpurchase'
                value={formik.values.Productpurchase}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.Productpurchase ? (
                <span class='text-danger'>Enter Product Purchase date</span>
              ) : null}
            </div>
            <div className='col-lg-6'>
              <label>Product Expires on</label>
              <input
                className='form-control'
                name='Productex'
                value={formik.values.Productex}
                onChange={formik.handleChange}
              ></input>
              {formik.errors.Productex ? (
                <span class='text-danger'>Enter Product Expires date</span>
              ) : null}
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6'>
              <input
                className='btn btn-primary'
                type='submit'
                value='Submit'
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
