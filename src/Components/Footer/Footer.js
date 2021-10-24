import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (
        <>
            <FooterDiv>
                <FooterWrapper>
                    <h3>©{(new Date().getFullYear())} SOCIAL BREW CAFE. Established London 2017. </h3>
                </FooterWrapper>
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
display:flex;
align-items:center;
justify-content:center;


`;