import React from "react";
import Slider from "react-slick";

// CSS
import "../../../pages/styles/slider.css";

// avatars
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autpPlaySpeed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {/* review 01 */}
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet adipisicing elit. perferendis atque, quam
          minus totam maiores laborum! Impedit consectetur illum aliquid odit."
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="w-25 rounded" />
          <h6>David Barn</h6>
        </div>
      </div>

      {/* review 02 */}
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet adipisicing elit. perferendis atque, quam
          minus totam maiores laborum! Impedit consectetur illum aliquid odit."
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="w-25 rounded" />
          <h6>Kate Wilson</h6>
        </div>
      </div>

      {/* review 03 */}

      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet adipisicing elit. perferendis atque, quam
          minus totam maiores laborum! Impedit consectetur illum aliquid odit."
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="w-25 rounded" />
          <h6>Willey Johnson Jr.</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
