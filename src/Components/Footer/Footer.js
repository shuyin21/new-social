import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (
        <>
            <FooterDiv>
                <FooterWrapper></FooterWrapper>
            </FooterDiv>
        </>
    )
}

export default Footer


const FooterDiv = styled.div`
width:100vw;
height:200px;
background-color: #222;
display:flex;
justify-content:center;
align-items:center;

`;

const FooterWrapper = styled.div`
width:60%;
height:80%;



`;