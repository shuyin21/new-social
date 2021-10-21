import React from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import BigImg from '../../Images/big-image.jpg';
import Sm1 from '../../Images/sm1.jpg';
import Sm2 from '../../Images/sm2.jpg';
import Sm3 from '../../Images/sm3.jpg';
import Sm4 from '../../Images/sm4.jpg';
import Sm5 from '../../Images/sm5.jpg';
import PlayStore from '../../Images/playStore.png';
import AppStore from '../../Images/appStore.png';

const About = () => {
    return (
        <>
            <AboutDiv id='about'>
                <AboutWrapper>

                    <LeftDiv>
                        <h3> About Us</h3>
                        <span>
                            Your one stop shop to Award-winning Speciality Coffee, Smoothies, Açai Bowls,
                            Home-made meals & so much more! ​We've only been here for 3 years, but 3 amazing years with Awards from TimeOut London 2018 & Global Hospitality 2019 & 2020!
                        </span>
                        <ButtonDiv to='menu'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80
                            }
                        >MENU</ButtonDiv>

                        <AppWrapper>
                            <StoreLink style={{ backgroundImage: `url(${PlayStore})` }}></StoreLink>
                            <StoreLink style={{ backgroundImage: `url(${AppStore})` }} ></StoreLink>
                        </AppWrapper>

                    </LeftDiv>
                    <RightDiv>
                        <ImageWrapper>
                            <BigImage />
                            <SmallImageWrapper>
                                <SmallImage style={{ backgroundImage: `url(${Sm1})` }} />
                                <SmallImage style={{ backgroundImage: `url(${Sm2})` }} />
                            </SmallImageWrapper>
                        </ImageWrapper>
                        <BottomImageWrapper>
                            <SmallImage style={{ backgroundImage: `url(${Sm3})` }} />
                            <SmallImage style={{ backgroundImage: `url(${Sm4})` }} />
                            <SmallImage style={{ backgroundImage: `url(${Sm5})` }} />
                        </BottomImageWrapper>
                    </RightDiv>
                </AboutWrapper>


            </AboutDiv>

        </>
    )
}

export default About


const AboutDiv = styled.div`
width: 100vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;




@media screen and (max-width:900px){
    height:1000px;
    margin-top: 50px;
}

`;

const AboutWrapper = styled.div`
width:70%;
height:80%;
display:grid;
grid-template-columns:50% 50%;


@media screen and (max-width:900px){
    display: flex;
    flex-direction: column;
    width:100vw;
    height:900px;
}

`;

const LeftDiv = styled.div`
display:flex;
flex-direction: column;
width: 80%;
align-items: flex-start;
justify-content: center;
text-align: left;

@media screen and (max-width:900px){
    width:100%;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    padding:0 5%;
}




h3{
    font-size: 48px;
    font-weight: 100;
    margin-bottom: 30px;
    
}

span{
font-size: 16px;
margin-bottom: 30px;
font-weight: 100;
}




`;
const ButtonDiv = styled(LinkS)`
width:150px;
height:50px;
text-align: center;
display:flex;
align-items: center;
justify-content: center;
font-weight: bold;
background-color: #d0a37c;
color: #fff;
cursor: pointer;

&:hover{
    background-color: #8F7056;
}

`;

const AppWrapper = styled.div`
width:100%;
height:70px;
margin-top: 50px;
display:flex;
align-items: center;
justify-content: space-between;
background-color: #222;
`;

const StoreLink = styled.div`
width:200px;
height:60px;
background-size:cover;
object-fit: cover;

`;

const RightDiv = styled.div`
display:flex;
flex-direction: column;
padding:0 20px;


@media screen and (max-width:1300px){
    align-items: center;
    justify-content: center;
    padding:0;
}


@media screen and (max-width:900px){
    padding:0;
    height:800px;
}




`;

const ImageWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;


`;

const BigImage = styled.div`
width:410px;
height:400px;
background-image: url(${BigImg});
background-size: cover;
object-fit: cover;
margin-bottom: 20px;



@media screen and (max-width: 1300px){
    margin-bottom: 0;
}

@media screen and (max-width:500px){
    width:90vw;
    height:450px;
    margin-bottom:0;
}



`;

const SmallImageWrapper = styled.div`
display:flex;
flex-direction: column;
height:100%;
align-items: flex-start;
justify-content: space-between;
padding-bottom: 20px;
margin-left:4%;


@media screen and (max-width: 1300px) {
    display:none;
}

`;

const SmallImage = styled.div`
width:10vw;
height:19vh;
object-fit: cover;
background-size: cover;




`;

const BottomImageWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:1300px){
    display:none;
}
`;