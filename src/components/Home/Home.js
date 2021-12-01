import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact'




const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;