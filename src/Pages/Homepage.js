import React from 'react'
import styled from 'styled-components';
import About from '../Components/About/About';
import Hero from '../Components/HeroSection/Hero';
import Menu from '../Components/Menu/Menu';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Booking from '../Components/Booking/Booking';
import Contact from '../Components/Contact/Contact';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <AllWrapper>
                <Hero />
                <About />
                <Menu />
                <Booking />
                <Contact />
                <Footer />
            </AllWrapper>
        </>
    )
}

export default Homepage

const AllWrapper = styled.div`
max-width: 100vw;
overflow: hidden;
`;