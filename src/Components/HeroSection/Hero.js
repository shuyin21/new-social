import React from 'react'
import styled from 'styled-components';
import CVideo from '../../Images/cafe.mp4';
import { Link as LinkS } from 'react-scroll';

const Hero = () => {
    return (
        <>
            <HeroMainDiv>
                <HeroBg>

                    <VideoBg autoPlay loop muted src={CVideo} type='video/mp4' />



                </HeroBg>
                <HeaderElement><h1>Your one stop shop to Award-winning Speciality Coffee</h1>
                    <MouseHolder>

                        <ScrollDowns to='profile'

                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80
                            }>

                            <Mousey>

                                <Scroller>

                                </Scroller>
                            </Mousey>
                        </ScrollDowns>
                    </MouseHolder>
                </HeaderElement>

            </HeroMainDiv>
        </>
    )
}

export default Hero


const HeroMainDiv = styled.div`
width: 100vw;
height: 100vh;
background-color: #000;


`;

const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 1000px;
overflow: hidden;
text-align: center;




`;

const VideoBg = styled.video`
width: 100%;
height: 100vh;
--o-object-fit:cover;
object-fit:cover;
background: #232a34;
display: flex;
align-items: center;
justify-content: center;


`;
const HeaderElement = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;


h1{
    width:50%;
    text-align: center;
    color:#fff;
    font-size: 2.5rem;
}

`;

const MouseHolder = styled.div`
width:100%;
height:100px;
display: flex;
align-items: center;
justify-content: center;
`;

const ScrollDowns = styled(LinkS)`
 position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
  width :34px;
  height: 55px;
`;

const Mousey = styled.div`
width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
cursor: pointer;
a{
    width:30px;
    height:100%;
    position:absolute;
    right:1px;
    bottom:0.5px;
}
`;
const Scroller = styled.div`
width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #4e945a;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}
`;