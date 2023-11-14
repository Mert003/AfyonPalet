import React from 'react';
import "./Footer.css";
import {AiOutlineClockCircle} from "react-icons/ai";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='Footer'>
        <img src={logo}  />
        <div className='FooterPolitika'>
            <h3>Şirket Politikamız</h3>
            <p>Afyon Palet Şirketi olarak, sektördeki uzun yıllara dayanan deneyimimizle ahşap palet, sandalye ve masa üretiminde öncüyüz. Müşteri memnuniyetini daima ön planda tutarak, sağlam ve estetik ürünlerimizle müşterilerimizin ihtiyaçlarına en iyi şekilde cevap veriyoruz. </p>
        </div>

        <div className='FooterMenu'>
            <h3>Hızlı Menü</h3>
            <ul>
                <li><Link to="/">ANASAYFA</Link></li>
                <li><Link to="/About">HAKKIMIZDA</Link></li>
                <li><Link to="/Products">ÜRÜNLERİMİZ</Link></li>               
            </ul>
        </div>

        <div className='FooterSaat'>
            
           <h3>Çalışma Saatleri</h3>
           <h4>Pzt-Cuma</h4>
           <h4><AiOutlineClockCircle size={35}/> 08.00 - 18.00</h4>
        </div>
      
    </div>
  )
}

export default Footer
