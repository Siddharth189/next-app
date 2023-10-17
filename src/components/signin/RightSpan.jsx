import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password length must me atleast 8";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const RightSpan = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="auth-right-span">
      <div className="signin-text">
        <p className="sign-in-text-1">Sign In</p>
        <p className="sign-in-text-2">Sign in your account</p>
      </div>
      <div>
        <span className="signin-options">
          <FcGoogle /> Sign in with google
        </span>
        <span className="signin-options">
          <FaApple style={{ color: "#999999" }} /> Sign in with apple
        </span>
      </div>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@gmail.com"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="••••••••"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <a href="/forgot">Forgot Password?</a> <br />
        <button type="submit" className="form-btn">
          Sign In
        </button>
      </form>

      <p>
        Don't have account? <a href="/register">Register here</a>{" "}
      </p>
    </div>
  );
};

export default RightSpan;
