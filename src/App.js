
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './pages/products/Product';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        
        <Route path='/Products' element={<Product />} />
      
      </Routes>
      </div>
  );
}

export default App;
