import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fw-bold">YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <button className="btn btn-danger me-3">Shop Now</button>
          <button className="btn btn-outline-secondary">Category</button>
          
          <div className="mt-4 d-flex">
            <img src="imges/flipkart.png" alt="Flipkart" className="me-3 img-fluid"  />
            <img src="imges/amazon.png" alt="Amazon" className="img-fluid"  />
          </div>
        </div>
        
      
        <div className="col-lg-6 col-md-12 text-center">
          <img src="imges/shoe_image.png" alt="Shoe" className="img-fluid" width={450} />
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
