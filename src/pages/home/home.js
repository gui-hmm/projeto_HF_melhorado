import React from 'react';
import Header from '../../components/header/header';
import './home.css'
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Trailer from '../../components/trailer/trailer';


function Home() {
    return (
        <>
            <Header />
            <Trailer/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;