

import { Formik, Form, Field, useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserContext from './usercontext';


export default function UserCreate() {

    let UserSubmit = async (values) => {


        let {
            firstName,
            lastName,
            email,
            password
        } = values;

        await fetch("https://5ff9537617386d0017b51c4a.mockapi.io/test/users", {

            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password

            }),
            headers: {
                "Content-type": "application/json"
            }
        })
alert ("User is added")
    }


    let validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        if (values.password.length < 8) {
            errors.password = 'Required 8 length';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            UserSubmit(values)
        },

    });


    return <>
        <div className="container">

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>User Form</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" name="firstName" value={formik.values.firstName} onChange={formik.handleChange}></input>
                        {formik.errors.firstName ? <span class="text-danger">Enter firstName</span> : null}
                    </div>

                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" name="lastName" value={formik.values.lastName} onChange={formik.handleChange}></input>
                        {formik.errors.lastName ? <span class="text-danger">Enter LastName</span> : null}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} ></input>
                        {formik.errors.email ? <span class="text-danger">Enter Email</span> : null}
                    </div>

                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" name="password" value={formik.values.password} onChange={formik.handleChange}></input>
                        {formik.errors.password ? <span class="text-danger">Enter Password .</span> : null}
                        {formik.errors.password ? <span class="text-danger">Password must contain minimun 8 letters</span> : null}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                </div>
            </form>
        </div>

    </>
}