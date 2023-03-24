import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least three characters";
  }

  if (!values.email) {
    errors.name = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z{2,4}]$/i.test(values.email)) {
    errors.email = "You have entered an invalid email";
  }

  if (!values.phonenumber) {
    errors.name = "Phone Number is Required";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
      values.phonenumber
    )
  ) {
    errors.phonenumber = "You have entered an invalid phone number.";
  }

  return errors;
};

export const ContactValidationInput = ({ addContact }) => {
  //** JavaScript */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
    },
    validate,
    onSubmit: (value) => {
      console.log(values);
    },
  });

  //** JSX (HTML) */
  return (
    <div className="form-group">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div className="mt-1">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="alert alert-danger mt-1">{formik.errors.name}</div>
          )}
        </div>
        <div className="mt-1">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="alert alert-danger mt-1">{formik.errors.email}</div>
          )}
        </div>
        <div className="mt-1">
          <input
            type="number"
            placeholder="Phone Number"
            className="form-control"
            name="phonenumber"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber && (
            <div className="alert alert-danger mt-1">
              {formik.errors.phonenumber}
            </div>
          )}
        </div>
        <div className="mt-1">
          <button className="btn btn-primary">Submit Contact</button>
        </div>
      </form>
    </div>
  );
};
