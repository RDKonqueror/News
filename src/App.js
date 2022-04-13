import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Headlines from './components/news/Headlines';
import Nation from './components/news/Nation';
import World from './components/news/World';
import Business from './components/news/Business';
import Sports from './components/news/Sports';
import Science from './components/news/Science';
import Health from './components/news/Health'; 
import Weather from './components/Weather';
import Technology from './components/news/Technology';
import Entertainment from './components/news/Entertainment';
import Top from './components/news/Top';
import Local from './components/news/Local';

const App = () => {

  return (
    <>
      <Header />
      <section>
        <Navigation />
        <Routes>
          <Route path='/' element={<Headlines />} />
          <Route path='/top-stories' element={<Top />} />
          <Route path='/local' element={<Local />} />
          <Route path='/nation' element={<Nation />} />
          <Route path='/world' element={<World />} />
          <Route path='/business' element={<Business />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/science' element={<Science />} />
          <Route path='/health' element={<Health />} />
        </Routes>
        <Weather />
      </section>
      <Footer />
    </>
  )
};

export default App;