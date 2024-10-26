import React from 'react';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-primary-subtle pt-5 pb-5 mb-5">
          <div className="container-fluid container ">
            <a className="navbar-brand fs-1" href="#">Quotes Central</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav fs-4">
                <li className="nav-item">
                  <a className="nav-link" href="#">Quotes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Add new quote</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Navbar;