import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.phone = "Name should be of 3 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length != 10) {
    errors.phone = "Password should be of length 10";
  }

  return errors;
};

export default AddProfile = ({ fun }) => {
  const [isBasic, setIsBasic] = useState(true);
  const [isContact, setIsContact] = useState(false);

  if (!isBasic && !isContact) {
    fun();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      instagram: "",
      youtube: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log("Submit Tapped!!");
      try {
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className="card-2" style={{ height: "auto " }}>
      <div className="flex-between">
        <h4
          style={{
            color: "var(--light-bulma, #231F20)",
            fontFeatureSSettings: "'clig' off, 'liga' off",
            fontFamily: "Figtree",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Add New Profile
        </h4>
        <AiOutlineClose
          onClick={() => {
            setIsBasic(false);
            setIsContact(false);
          }}
        />
      </div>
      <div className="line-add-profile"></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <button
            className="add-profile-btn"
            onClick={() => {
              setIsContact(false);
              setIsBasic(true);
            }}
            style={{
              borderBottom: `10px solid ${isBasic ? "#3f84f8" : "#D9D9D9"}`,
            }}
          >
            Basic
          </button>
          <button
            className="add-profile-btn"
            onClick={() => {
              setIsContact(true);
              setIsBasic(false);
            }}
            style={{
              borderBottom: `10px solid ${isContact ? "#3f84f8" : "#D9D9D9"}`,
            }}
          >
            Contact
          </button>
        </div>

        {isBasic && (
          <div className="basic-profile">
            <form onSubmit={formik.handleSubmit} className="form">
              <label htmlFor="name">Enter Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Eg. John Doe"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
              <label htmlFor="email">Enter Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Eg. john@xyz.com"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <label htmlFor="phone">Enter Phone*</label>
              <input
                id="phone"
                name="phone"
                placeholder="Eg. 7897998421"
                type="number"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : null}
              <button
                className="form-btn"
                onClick={() => {
                  setIsBasic(false);
                  setIsContact(true);
                }}
                style={{ width: "10%", alignSelf: "flex-end", width: "auto" }}
              >
                Next
              </button>
            </form>
          </div>
        )}
        {!isBasic && (
          <div className="contact-profile">
            <form onSubmit={formik.handleSubmit} className="form">
              <label htmlFor="instagram">Instagram Link (Optional) </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                placeholder="Eg. ..instagram.com/username"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.instagram}
              />

              <label htmlFor="email">Youtube Link (Optional)</label>
              <input
                id="youtube"
                name="youtube"
                type="text"
                placeholder="Eg. ..youtebe/username"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.youtube}
              />
              <div style={{ alignSelf: "flex-end" }}>
                <button
                  className="form-btn"
                  onClick={() => {
                    setIsBasic(true);
                    setIsContact(false);
                  }}
                  style={{
                    width: "10%",
                    alignSelf: "flex-end",
                    backgroundColor: "#fff",
                    color: "black",
                    border: "1px solid var(--light-trunks, #999CA0)",
                    width: "auto",
                    marginRight: "5px",
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="form-btn"
                  onClick={() => {
                    setIsBasic(false);
                    setIsContact(false);
                  }}
                  style={{ width: "10%", alignSelf: "flex-end", width: "auto" }}
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
