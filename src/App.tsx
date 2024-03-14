import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage/Index';
import LoginPage from './pages/LoginPage/Index';
import Navbar from './components/NavBar';
import ServicePage from './pages/ServicePage/Index';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage/Index';
import MarketPage from './pages/MarketPage/Index';
import UserPage from './pages/UserPage/Index';
import CommunityPage from './pages/CommunityPage';

const Layout = () => {
  return(
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Outlet />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='login' element= {<LoginPage />} />
          <Route path='service' element= {<ServicePage />} />
          <Route path='about' element= {<AboutPage />} />
          <Route path='market' element= {<MarketPage />} />
          <Route path='user' element= {<UserPage />} />
          <Route path='community' element= {<CommunityPage />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
