// import React from 'react'
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="container">
          <div className="navbar-content-wrapper">
            <div className="navbar-content">
              <div className="navbar-content-heading-wrapper">
                <div className="navbar-content-heading">
                  <a href="">
                    <h1>Biccas</h1>
                  </a>
                </div>
              </div>
              <div className="navbar-content-links-wrapper">
                <div className="navbar-content-links">
                  <nav>
                    <ul>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Product</a>
                      </li>
                      <li>
                        <a href="">FAQ</a>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <a href="">About Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="navbar-content-btns-wrapper">
                <div className="navbar-content-btns">
                  <div className="navbar-content-login-btn-wrapper">
                    <div className="navbar-content-login-btn">
                      <button>Login</button>
                    </div>
                  </div>
                  <div className="navbar-content-sign-up-btn-wrapper">
                    <div className="navbar-content-sign-up-btn">
                      <button>Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-content-menu-wrapper">
                <div className="navbar-content-menu">
                  <HiOutlineMenuAlt3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
