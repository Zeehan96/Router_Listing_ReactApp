import React from 'react';
import img from '../assets/NavLogoo.PNG';
import WorkImg from '../assets/w2.PNG';
import cupimg from '../assets/cup.png';
import heart from '../assets/heart.png';
import msgs from '../assets/msgs.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side of the Navbar */}
      <div className="left-section">
      <img className='navlogo' src={img} alt="Description of the image" />
        <div className="tags">
          <div className="tag">Work<img src={WorkImg} alt="Description of the image" />
         </div>
           <div className="tag">Services<img src={cupimg} alt='im'/></div>
           <div className="tag">About<img src={heart} alt='im'/>  </div> 
        </div>
      </div>

      {/* Right side of the Navbar */}
      <div className="right-section">
        <button className="navbar-button1">blog<img src={msgs} alt='im'/></button>
        <button className="navbar-button">Planner</button>
      </div>
    </nav>
  );
};

export default Navbar;
