import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/NavBar';
import ServicePage from './pages/ServicePage/ServicePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage/AboutPage';
import MarketPage from './pages/MarketPage/MarketPage';
import UserPage from './pages/UserPage/UserPage';
import CommunityPage from './pages/CommunityPage/Community';


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
