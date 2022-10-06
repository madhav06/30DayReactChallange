import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../pages/styles/category.css";

const categoryData = [
  {
    display: "Fast Food",
    imageUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imageUrl: categoryImg02,
  },
  {
    display: "Sides",
    imageUrl: categoryImg03,
  },
  {
    display: "Raw Meat",
    imageUrl: categoryImg04,
  },
];

const category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imageUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default category;
