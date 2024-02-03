// Banner.js
import React from 'react';
import Bannerpic from '../assets/banner.PNG'; 

const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="row">
        {/* Left side with content */}
        <div className="col-lg-6 col-md-12">

          <div className="banner-content">
          <div className='container'>

            <h1>Article for</h1>
            <h1 className='h1green'>front-end devs</h1>

            <p>Article on web performance,<br/>responsive web design and more </p>
          </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="col-lg-6 col-md-12">
          <img
            className="img-fluid banner-image"
            src={Bannerpic}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
