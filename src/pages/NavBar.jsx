import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link to="/">
          <img src="images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `nav-link fs-5 ${isActive ? "text-primary-custom" : ""}`
                  }
                >
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-primary-custom nav-link fs-5 ${isActive ? "text-primary-custom" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `hover:text-primary-custom nav-link fs-5 ${isActive ? "text-primary-custom" : ""}`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `hover:text-primary-custom nav-link fs-5 ${isActive ? "text-primary-custom" : ""}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/support"
                  style={{ hover: { color: "#007bff" } }}
                  className={({ isActive }) =>
                    `nav-link fs-5 ${isActive ? "text-primary-custom" : ""}`
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
