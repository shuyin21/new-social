import React from 'react'
import styled from 'styled-components';

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
                        <OrderLink />
                        <OrderLink />
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
`;

const OrderLink = styled.div`
width:30%;
`;