import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (
        <>
            <FooterDiv>
                <FooterWrapper>
                    <h3>©{(new Date().getFullYear())} SOCIAL BREW CAFE  </h3>
                    <h4>Established London 2017.</h4>
                </FooterWrapper>
            </FooterDiv>
        </>
    )
}

export default Footer


const FooterDiv = styled.div`
width:100vw;
height:150px;
background-color: #222;
display:flex;
justify-content:center;
align-items:center;

`;

const FooterWrapper = styled.div`
width:60%;
height:80%;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;



h3,h4{
    color: #fff;
    margin:2px 0;
}
`;