import React from "react";
import logo from "../../assets/images/logo.png";
import fssai from "../../assets/images/fssai-logo.png";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              {/* <h5 className="footer__veganhut">Veganhut</h5> */}
              <p className="veganhut border-0 ps-0">
                Veganhut are extremely popular for food lovers. Our aim and
                motto is to deliver the best at the most affordable rates and it
                faithfully observes to its promise.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Order Now</h5>
            <ListGroup className="order__now border-0 ps-0">
              <ListGroupItem className="order__now-item border-0 ps-0">
                <p>Deals</p>
                <p>Pizzas</p>
                <p>Sides</p>
                <p>Drinks</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Visit Veganhut</h5>
            <ListGroup className=" visit__veganhut border-0 ps-0">
              <ListGroupItem className="visit__veganhut-item border-0 ps-0">
                <p>Locate a store</p>
                <p>Global Blog</p>
                <p>Saturday: off</p>
                <p>Sunday: off</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Our Policies</h5>
            <ListGroup className="our__policies  border-0 ps-0">
              <ListGroupItem className="our__policies-item  border-0 ps-0">
                <p>Privacy</p>
                <p>Terms and Conditions</p>
                <p>Responsible disclosure</p>
                <p>FAQs & help</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <ListGroup className=" logo fssai__logo  border-0 ps-0">
              <img src={fssai} alt="logo" />
              <h5 className="feedback feedback__button"></h5>
              <Button>Feedback</Button>
            </ListGroup>
          </Col>
        </Row>

        {/* ===== 2nd Row, FSSAI, Download section ===== */}
        <Row className="mt-6">
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-3 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.twitter.com">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg="6" md="6">
            <p className="copyright__text">Copyright: Madhav Nandan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
