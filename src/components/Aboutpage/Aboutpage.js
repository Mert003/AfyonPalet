import React from 'react';
import "./Aboutpage.css";
const Aboutpage = () => {
  return (
    <div className='AboutPageDiv'>
    <img src={require("../../images/palet4.jpg")} />
    <div className='AboutPageContent'>
    <h1>Biz Kimiz?</h1>
   <p>Afyon Palet Şirketi, ahşap palet, sandalye ve masa üretiminde uzmanlaşmış köklü bir firma olarak öne çıkıyor. Kurucusu Mevlüt Kurtulmuş'un liderliğinde 50 yılı aşkın deneyime sahip olan şirketimiz, kaliteli ve dayanıklı ürünler sunma konusunda öncü bir konumda bulunuyor.</p>
   <p id='pbir'>Firma olarak en büyük önceliğimiz, müşterilerimizin beklentilerini en üst düzeyde karşılamak ve onlara kaliteli ürünler sunmaktır. Ahşap paletlerimiz, uluslararası lojistik endüstrisinde güvenilir bir şekilde kullanılmaktadır ve sektördeki liderliğimizi pekiştiren önemli bir ürün grubumuzu oluşturmaktadır.</p>
   <p id='piki'>Afyon Palet Şirketi olarak, güvenilir hizmet anlayışımız, doğal güzellikteki ürünlerimiz ve müşteri memnuniyetine verdiğimiz önemle sektördeki lider konumumuzu korumaya ve ilerletmeye devam ediyoruz. </p>
    </div>
    </div>
  )
}

export default Aboutpage
