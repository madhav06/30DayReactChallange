import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_Img from "../Image/Sign_Img";
import LogIn_Img from "../Image/LogIn_Img";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inputVal, setInputVal] = useState({
    email: "",
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

  const [LocalStorageData, setLocalStorageData] = useState([]);
  console.log(inputVal);

  //addData function for Button
  const addData = (event) => {
    event.preventDefault();

    const getuserArr = localStorage.getItem("userSavedData");
    console.log(getuserArr);

    // console.log(inputVal);

    const { email, password } = inputVal;

    if (email === "") {
      alert("email field is required!");
    } else if (!email.includes("@")) {
      alert("please enter valid email!");
    } else if (password === "") {
      alert("password field is required!");
    } else if (password.length < 5) {
      alert("length should be greater than 5");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((element, key) => {
          return element.email === email && element.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("User login Success!");

          localStorage.setItem("userLoggedData", JSON.stringify(userlogin));
          history("/details");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          {/*Left Docment*/}
          <div className="left__data mt-5 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8" style={{ color: "#47B5FF" }}>
              Sign In
            </h3>
            <Form>
              <Form.Group
                className="mt-4 mb-3 col-lg-8"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Enter email"
                />
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
                style={{ background: "#47B5FF" }}
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 text-center col-lg-8">
              New Here?{" "}
              <span>
                <NavLink to="/">SignUp</NavLink>
              </span>
            </p>
          </div>

          {/*Right Docment*/}
          <LogIn_Img />
        </section>
      </div>
    </>
  );
};
export default Login;
