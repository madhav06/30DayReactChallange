import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_Img from "../Image/Sign_Img";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  console.log(inputVal);

  const getdata = (event) => {
    // console.log(event.target.value);

    const { value, name } = event.target;
    // console.log(value, name);

    setInputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
    console.log(inputVal);
  };
  // console.log(inputVal);

  //LocalStorage Data
  const [LocalStorageData, setLocalStorageData] = useState([]);
  console.log(inputVal);

  const addData = (event) => {
    event.preventDefault();

    console.log(inputVal);

    const { name, email, date, password } = inputVal;

    if (name === "") {
      alert("name field is required!");
    } else if (email === "") {
      alert("email field is required!");
    } else if (!email.includes("@")) {
      alert("please enter valid email!");
    } else if (date === "") {
      alert("date field is required!");
    } else if (password === "") {
      alert("password field is required!");
    } else if (password.length < 5) {
      alert("length should be greater than 5");
    } else {
      console.log("Data successfully added.");

      localStorage.setItem(
        "userSavedData",
        JSON.stringify([...LocalStorageData, inputVal])
      );
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          {/*Left Docment*/}
          <div className="left__data mt-4 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8" style={{ color: "#7FB77E" }}>
              Sign Up
            </h3>
            <Form>
              <Form.Group
                className=" mt-4 mb-3 col-lg-8"
                controlId="formBasicText"
              >
                <Form.Control
                  type="text"
                  onChange={getdata}
                  name="name"
                  placeholder="Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll not share your email with anyone.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicDate">
                <Form.Control type="date" onChange={getdata} name="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  onChange={getdata}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-8"
                type="submit"
                style={{ background: "#59CE8F" }}
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 text-center col-lg-8">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>
            </p>
          </div>

          {/*Right Docment*/}
          <Sign_Img />
        </section>
      </div>
    </>
  );
};

export default Home;
