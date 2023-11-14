import React from 'react';
import "./About.css";

const About = () => {
   
  return (
    <div className='About'>

        <div className='AboutDiv'>
        <img src={require("../../images/palet4.jpg")} />
        <div className='AboutContent'>
        <h1>Biz Kimiz?</h1>
        <p>Merhaba! Biz, Afyon Palet olarak ahşap palet, sandalye ve masa üreten bir aile şirketiyiz. Kaliteli ve dayanıklı ahşap ürünleriyle uzun yıllardır sektörde hizmet vermekteyiz. Kurucusu Mevlüt Kurtulmuş'un liderliğinde, üretimde profesyonelliği ve müşteri memnuniyetini her zaman ön planda tutuyoruz.</p>
        </div>
        </div>


        <div className='AboutDiv'>
        
        <div className='AboutContent'>
        <h1>Profesyonel Yaklaşım</h1>
        <p>Firmamızın temelleri, Mevlüt Kurtulmuş'un ahşap sektöründeki uzun yıllara dayanan deneyimi ve tutkusuyla atıldı. Mevlüt Bey'in liderliğinde, üretim süreçlerimizde profesyonel yaklaşımı benimsedik. Yenilikçi teknolojileri ve geleneksel el işçiliğini bir araya getirerek, müşterilerimize yüksek kalitede ürünler sunuyoruz.</p>
        </div>
        <img src={require("../../images/palet6.jpg")} />

        </div>


        <div className='AboutDiv'>
        <img src={require("../../images/palet.jpg")} />
        <div className='AboutContent'>
        <h1>Kalite ve Dayanıklılık</h1>
        <p>Firmamızın temel değerlerinden biri, ürünlerimizin kalitesi ve dayanıklılığıdır. Ahşap paletlerimiz, taşıma ve depolama süreçlerinde en iyi performansı sağlamak için özenle tasarlanmıştır. Sandalyelerimiz ve masalarımız ise ev ve iş mekanlarında uzun yıllar boyunca şıklığını ve fonksiyonelliğini korur.</p>
        </div>
      
        
        </div>



    </div>
  )
}

export default About
