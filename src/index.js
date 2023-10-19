import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Page404 from './pages/404/Page404';
import Housing from './pages/Housing/Housing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Housing/:id" element={<Housing/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);