import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

const Details = () => {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  const [passwordShown, setPasswordShown] = useState(false);

  // for Modal
  const [show, setShow] = useState(false);

  // Modals key buttons
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const history = useNavigate();

  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  const Birthday = () => {
    const getlogin = localStorage.getItem("userLoggedData");
    if (getlogin && getlogin.length) {
      const user = JSON.parse(getlogin);

      setLoginData(user);

      const userbirth = loginData.map((element, key) => {
        return element.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 5000);
      }
    }
  };

  //userlogout handler

  const userLogout = () => {
    localStorage.removeItem("userLoggedData");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {loginData.length === 0 ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Error Code: 404</Alert.Heading>
          <p>
            No details found or matched for the inputs, the username or password
            maybe wrong please check and type again. You can also regenerate a
            new password ! that may help you out.
          </p>
        </Alert>
      ) : (
        <>
          <div className="container mt-5">
            <section className="d-flex justify-content-between">
              {/*Left Docment*/}
              <div className="left__data mt-5 p-3" style={{ width: "100%" }}>
                <h1 className="col-lg-6" style={{ color: "#D7C0AE" }}>
                  Details Log:
                </h1>

                <h5 className="col-lg-6 mt-4" style={{ color: "#FA9494" }}>
                  Your Name:{" "}
                  <span style={{ color: "#9C2C77" }}>{loginData[0].name}</span>
                </h5>
                <h5 className="col-lg-6 mt-4" style={{ color: "#FA9494" }}>
                  Your DOB:{" "}
                  <span style={{ color: "#9C2C77" }}>{loginData[0].date}</span>
                </h5>
                <h5 className="col-lg-6 mt-4" style={{ color: "#FA9494" }}>
                  Your Email:{" "}
                  <span style={{ color: "#9C2C77" }}>{loginData[0].email}</span>
                </h5>

                <h5 className="col-lg-6 mt-4" style={{ color: "#FA9494" }}>
                  Your Password:
                  <span style={{ color: "#9C2C77" }}>
                    {loginData[0].password === passwordShown
                      ? " text"
                      : " * * * * * * * * "}
                  </span>
                </h5>

                <p className="col-lg-6 mt-4" style={{ color: "#FA9494" }}>
                  please check your email:{" "}
                  <span style={{ color: "#9C2C77" }}> Notification</span>
                </p>

                <Button
                  className="col-lg-3 mt-3"
                  variant="primary"
                  size="lg"
                  active
                  onClick={userLogout}
                >
                  Logout
                </Button>
              </div>
            </section>
          </div>

          {loginData[0].date === todayDate ? (
            <Modal className="mt-3 col-lg-6" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title
                  className="text-center col-lg-12"
                  style={{ color: "#367E18" }}
                >
                  {loginData[0].name}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>Yooo.. yooo</Modal.Body>
              <Modal.Footer>
                <Button variant="info" size="lg" active onClick={handleShow}>
                  Save
                </Button>
                <Button variant="dark" size="lg" active onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
      )
    </>
  );
};

export default Details;
