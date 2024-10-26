import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-primary-subtle pt-5 pb-5 mb-5">
          <div className="container-fluid container ">
            <NavLink to="/" className="navbar-brand fs-1">Quotes Central</NavLink>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav fs-4">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Quotes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/quotes/add-quote" className="nav-link">Add new quote</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Navbar;