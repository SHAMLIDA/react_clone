import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light mt-5 py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <h6 className="text-uppercase font-weight-bold">Resources</h6>
        <ul className="list-unstyled " >
          <li><a  href="#" style={{textDecoration:"none" , color:"black"}}>Find A Store</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Become A Member</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Send Us Feedback</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Help</a></li>
        </ul>
      </div>

      <div className="col-md-3">
        <h6 className="text-uppercase font-weight-bold">Get Help</h6>
        <ul className="list-unstyled">
          <li><a href="#" style={{textDecoration:"none" , color:"black"}}>Order Status</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Delivery</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Returns</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Payment Options</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Contact Us On Nike.com Inquiries</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Contact Us On All Other Inquiries</a></li>
        </ul>
      </div>

      <div className="col-md-3">
        <h6 className="text-uppercase font-weight-bold">Company</h6>
        <ul className="list-unstyled">
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>About Nike</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>News</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Careers</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Investors</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Sustainability</a></li>
        </ul>
      </div>

      <div className="col-md-3">
        <h6 className="text-uppercase font-weight-bold">Guides</h6>
        <ul className="list-unstyled">
          <li><a href="#"style={{textDecoration:"none", color:"black"}}>Terms of Sale</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Terms of Use</a></li>
          <li><a href="#"style={{textDecoration:"none" , color:"black"}}>Nike Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-4">
      <p>© 2024 Nike, Inc. All rights reserved</p>
    </div>
  </div>
</footer>

  );
}

export default Footer;

