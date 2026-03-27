import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductsPage from './pages/Products';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import DesignEngineeringPage from './pages/DesignEngineering';
import QualityTestingPage from './pages/QualityTestingPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/design-and-engineering' element={<DesignEngineeringPage/>} />
          <Route path='/quality-and-testing' element={<QualityTestingPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
