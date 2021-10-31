import React, { useState } from 'react';
import styled from 'styled-components';
import About from '../Components/About/About';
import Hero from '../Components/HeroSection/Hero';
import Menu from '../Components/Menu/Menu';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Booking from '../Components/Booking/Booking';
import Contact from '../Components/Contact/Contact';
import Order from '../Components/Order/Order';
import Gallery from '../Components/Gallery/Gallery';
import Sidebar from '../Components/Sidebar/Sidebar';

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);


    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <AllWrapper>
                <Hero />
                <About />
                <Menu />
                <Order />
                <Gallery />
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