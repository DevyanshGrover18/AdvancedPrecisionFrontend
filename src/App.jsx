import React from 'react';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductsPage from './pages/Products';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import DesignEngineeringPage from './pages/DesignEngineering';
import QualityTestingPage from './pages/QualityTestingPage';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './pages/admin/Layout';
import AdminOverview from './pages/admin/Overview';
import AdminProducts from './pages/admin/Products';
import AdminMedia from './pages/admin/Media';

const AppShell = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminRoute ? <Navbar /> : null}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/design-and-engineering' element={<DesignEngineeringPage/>} />
          <Route path='/quality-and-testing' element={<QualityTestingPage/>} />
          <Route path='/admin/login' element={<AdminLogin/>} />
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Navigate to='overview' replace />} />
            <Route path='overview' element={<AdminOverview/>} />
            <Route path='products' element={<AdminProducts/>} />
            <Route path='media' element={<AdminMedia/>} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      {!isAdminRoute ? <Footer /> : null}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
};

export default App;
