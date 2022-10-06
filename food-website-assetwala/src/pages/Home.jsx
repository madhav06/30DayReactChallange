import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "./styles/hero-section.css";

import { Link } from "react-router-dom";
import products from "../assets/fake-data/products";
// import Category
import Category from "../components/UI/category/Category.jsx";

// import ProductCard
import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import "./styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
  },

  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
  },
];

const Home = () => {
  // category and products

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");

    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    /*--- All ---*/

    if (category === "ALL") {
      setAllProducts(products);
    }

    /*--- Burger ---*/

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    /*--- Pizza ---*/

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    /*--- Bread ---*/

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  });
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5
                  className=" mb-3
                "
                >
                  50% OFF, TRY CODE: TRYNEW
                </h5>
                <h1 className="mb-2 hero__title">
                  <span>Boring Hata,</span> Pizza Manga!!
                </h1>
                <p>
                  Free delivery on all orders above ₹199* and unlock free dishes
                  on all orders above ₹249*
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now<i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn d-flex align-items-center justify-content-between">
                    <Link to="/foods">See All Foods</Link>
                  </button>
                </div>

                {/* Icons */}

                <div className=" hero__service d-flex align-items-center gap-5 mt-3">
                  <p className="d-flex align-items-center gap-2">
                    <span className="delivery__icon">
                      <i class="ri-e-bike-fill"></i>
                    </span>
                    Express delivery
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="payment__icon">
                      <i class="ri-bank-card-fill"></i>
                    </span>
                    Hasslefree payments
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="checkout__icon">
                      <i class="ri-shield-check-fill"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__image">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mt-5">
              <h5 className="feature__subtitle">We have</h5>
              <h2 className="feature__title"> A wide range of</h2>
              <h4 className="feature">
                catalog <span>to choose from.</span>
              </h4>
              <p className="mt-3 mb-1 feature__text">
                Lorem, ipsum dolor sit amet consectet adipisicing elit. Dolor
                eius?
              </p>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectet adipisicing elit. Dolor
                eius?
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-3">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-2"
                  />
                  <h5 className="mb-3">{item.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Popular Card section */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button
                  className={`all__btn ${category === "ALL"}`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER"
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA"
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD"
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="Tasty__treat-desc">
                  lorem ipsum dolor sit amet adipisicing elit. Dolorum, minus.
                  Temopra reprehenderit a corporis velit, vitae ullam, repellat
                  illo sequi odio esse.
                </p>

                <ListGroup className="mt-4">
                  {/* Fresh foods */}
                  <ListGroupItem className="border-0 ps-0 tasty__title">
                    <p className=" p__index d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line">
                        Fresh and tasty foods
                      </i>
                    </p>
                    <p className="tasty__title">
                      Lorem ipsum, dolor sit amet adipisicing elit. Quia,
                      voluptatibus.
                    </p>
                  </ListGroupItem>

                  {/* Quality Check */}
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className=" p__index d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line">
                        Quality verified, Customer ratings
                      </i>
                    </p>
                    <p className="tasty__title">
                      Lorem ipsum, dolor sit amet adipisicing elit. Quia,
                      voluptatibus.
                    </p>
                  </ListGroupItem>

                  {/* Ease to order */}
                  <ListGroupItem className="border-0 ps-0 ">
                    <p className="p__index d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line">
                        Order from any location
                      </i>
                    </p>
                    <p className="tasty__title">
                      Lorem ipsum, dolor sit amet adipisicing elit. Quia,
                      voluptatibus.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> says.
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum, dolor sit amet adipisicing elit. Quia,
                  voluptatibus.
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
