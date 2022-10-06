import React, { useRef } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const nav\_\_links = [
{
display: "Home",
path: "/home",
},
{
display: "Foods",
path: "/foods",
},
{
display: "Contact",
path: "/contact",
},
{
display: "Cart",
path: "/cart",
},
{
display: "Payment",
path: "/checkout",
},
];

const Header = () => {
{
/_references DOM element _/
}

const menuRef = useRef(null);
const toggleMenu = () => menuRef.current.classList.toggle("show\_\_menu");

return (
<header className="header">
<Container>
<div className="nav__wrapper ">
<div className="logo">
<img src={logo} alt="logo" />
<h6>Tasty Treat</h6>
</div>

          {/* ======== menu ========*/}

          <div className="navigation " ref={menuRef}>
            <div className="menu gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/*=== nav right icons ===*/}

          <div className="nav__right gap-4">
            <span className="cart__icon">
              <i className="ri-shopping-cart-fill"></i>
              <span className="cart__badge"></span>
            </span>

            <span className="user__icon">
              <Link to="/login">
                <i className="ri-user-fill"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>

);
};

export default Header;
