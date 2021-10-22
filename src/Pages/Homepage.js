import React from 'react'
import styled from 'styled-components';
import About from '../Components/About/About';
import Hero from '../Components/HeroSection/Hero';
import Menu from '../Components/Menu/Menu';
import Navbar from '../Components/Navbar/Navbar';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <AllWrapper>
                <Hero />
                <About />
                <Menu />
            </AllWrapper>
        </>
    )
}

export default Homepage

const AllWrapper = styled.div`
max-width: 100vw;
overflow: hidden;
`;