import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
