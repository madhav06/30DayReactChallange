import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Become an Instructor</h1>
        <span className="form-input-login">
          Already have an account? <a href="#">Login</a>
        </span>

        {/* Name */}
        <div className="form-inputs">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Mobile Number */}
        <div className="form-inputs">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            type="number"
            name="mobile"
            className="form-input"
            placeholder="Enter mobile number"
            value={values.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>

        {/* password */}
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-inputs">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            id="cpassword"
            type="password"
            name="cpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={values.cpassword}
            onChange={handleChange}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>

        {/* Address */}
        <div className="form-inputs">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            className="form-input"
            placeholder="Enter your address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        {/* Social Links */}
        <div className="form-inputs">
          <label htmlFor="social">Social Profiles</label>
          <input
            id="social"
            type="text"
            name="social"
            className="form-input"
            placeholder="Enter social links"
            value={values.social}
            onChange={handleChange}
          />
          {errors.social && <p>{errors.social}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
