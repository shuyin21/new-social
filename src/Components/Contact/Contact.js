import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <ContactDiv id="contact">
                <ContactWrapper>
                    <MapDiv>


                        <iframe id="gmap_canvas" title='Gmap_canvas'
                            src="https://maps.google.com/maps?q=social%20brew%20cafe&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>






                    </MapDiv>
                    <AddressDiv >
                        <h1>SOCIAL BREW CAFE</h1>
                        <h3>38-40 Lower Richmond Rd, London SW15 1JP</h3>
                        <h3>Mon-Sun:<br /> 8am-4pm</h3>
                        <h1>020 8785 4882</h1>

                    </AddressDiv>
                </ContactWrapper>
            </ContactDiv>
        </>
    )
}

export default Contact

const ContactDiv = styled.div`
min-height: 800px;
margin: 0;
padding: 5% 0;
background-color: #fff;
@media screen and (max-width:1500px){
    padding: 5% 2%;
}
`;

const ContactWrapper = styled.div`
display: flex;
justify-content: flex-start ;
align-items: center;
@media screen and (max-width:1000px){
    flex-direction: column-reverse;
}
`;

const MapDiv = styled.div`
min-width: 100%;
height:500px;
filter: grayscale(100%);
iframe{
    height:100%;
    width:100%
}
@media screen and (max-width:1000px){
    max-width: 100%;
    width:100%;
}
`;

const AddressDiv = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
padding: 5%;
background-color: #f9f9f9;
height:400px;
margin-left:10px;
margin-bottom: 80px;
max-width: 400px;
position: absolute;
@media screen and (max-width:1000px){
    max-width: 100%;
    width:100%;
    margin-left:0;
    margin-bottom: 0;
    position: relative;
}
h1{
    margin:20px 0;
    font-size: 24px;
    color: #d0a37c;
}
h3{
    font-weight: 400;
    font-size: 17px;
    color: #4a4a4a;
    margin: 20px 0;
}
`;