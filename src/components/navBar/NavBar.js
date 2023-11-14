import React from 'react';
import './NavBar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='NavBar'>
       
    <img src={logo} className='logo' style={{marginLeft:"30px"}}/>
    <h4 style={{marginLeft:"30px"}}><Link to="/">ANASAYFA</Link></h4>
        <h4 style={{marginLeft:"30px"}}><Link to="/About">HAKKIMIZDA</Link></h4>
        <h4  style={{marginLeft:"30px"}}><Link to="/Products">ÜRÜNLERİMİZ</Link></h4>
      
    </div>
  )
}

export default NavBar;
