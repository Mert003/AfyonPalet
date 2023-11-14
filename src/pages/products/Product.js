import React from 'react'
import NavContact from '../../components/navContact/NavContact'
import NavBar from '../../components/navBar/NavBar'
import Products from '../../components/products/Product'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

const Product = () => {
  return (
    <div>
      <NavContact />
      <NavBar />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default Product
