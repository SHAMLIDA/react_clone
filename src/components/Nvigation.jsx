import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        
          <a className="navbar-brand" href="#">
            <img src="/imges/brand_logo.png" alt="Brand Logo" width="50" height="30" />
          </a>

        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button className="btn btn-outline-danger text-white bg-danger ms-3">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
