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
import CommunityPage from './pages/CommunityPage/CommunityPage';
import CreatePostPage from './pages/CommunityPage/CreatePostPage';
import PostDetailPage from './pages/CommunityPage/PostDetailPage';
import InvestmentInfoPage from './pages/InvestPage/InvestmentInfoPage';
import InvestPage from './pages/InvestPage/InvestPage';
import FinancialKnowledgePage from './pages/InvestPage/FinancialKnowledgePage';
import YouTubePage from './pages/InvestPage/YouTubePage';
import RegistrationPage from './pages/LoginPage/RegistrationPage';
import IDSearchPage from './pages/LoginPage/IDSearchPage';
import PasswordResetPage from './pages/LoginPage/PasswordResetPage';


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
          <Route path='idsearch' element= {<IDSearchPage />} />
          <Route path='passwordreset' element= {<PasswordResetPage />} />
          <Route path='register' element= {<RegistrationPage />} />
          <Route path='service' element= {<ServicePage />} />
          <Route path='about' element= {<AboutPage />} />
          <Route path='market' element= {<MarketPage />} />
          <Route path='user' element= {<UserPage />} />
          <Route path='community' element= {<CommunityPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} /> 
          <Route path='/invest' element= {<InvestPage />} />
          <Route path="/investment" element={<InvestmentInfoPage />} />
          <Route path="/financial-knowledge" element={<FinancialKnowledgePage />} />
          <Route path="/youtube" element={<YouTubePage />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;