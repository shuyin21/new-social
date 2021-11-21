import React from 'react'
import styled from 'styled-components';
import Deliveroo from '../../Images/deliveroo.png';
import Uber from '../../Images/ubereats.png';

const Order = () => {
    return (
        <>
            <OrderDiv>
                <OrderWrapper>
                    <HeaderWrapper>
                        <h1>Order Online</h1>
                        <h3>Bring Social Brew Cafe home today</h3>
                    </HeaderWrapper>
                    <LinkWrapper>
                        <a href='https://deliveroo.co.uk/menu/london/putney/social-brew-cafe' target='_blank'>
                            <OrderLink src={Deliveroo} /></a>
                        <a href='https://www.ubereats.com/gb/store/social-brew-cafe/MACBn5Z1TAWtQfMS7rYEvA?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMktUMyUyMDNQRSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUplX0EtWDIwSmRrZ1JObWN4SXNYX09MVSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E1MS4zOTkyNDkzJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTAuMjU4Mjk0NiU3RA%3D%3D'
                            target='_blank'><OrderLink src={Uber} /></a>
                    </LinkWrapper>
                </OrderWrapper>
            </OrderDiv>
        </>
    )
}

export default Order


const OrderDiv = styled.div`
width:100%;
height:300px;
background-color: #222;
display:flex;
align-items: center;
justify-content: center;

`;

const OrderWrapper = styled.div`
width: 70%;
height:70%;
display:flex;
flex-direction: column;

`;

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    color:#fff;
}
h3{
    color:#d0a37c;
}

`;

const LinkWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height:100%;


a{
    display: flex;
align-items: center;
justify-content: center;
width: 30%;
height:100%;


@media screen and (max-width:768px){
    width:70%;
}
}
`;

const OrderLink = styled.img`

height:50%;
margin:0 20px;
cursor:pointer;

&:hover{
    transform:scale(0.97);
}

`;