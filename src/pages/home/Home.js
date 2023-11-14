import React from 'react';
import NavContact from '../../components/navContact/NavContact';
import NavBar from '../../components/navBar/NavBar';
import Hero from '../../components/hero/hero';
import Products from '../../components/products/Product';
import About from "../../components/about/About";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <NavContact />
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
