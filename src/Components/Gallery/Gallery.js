import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';
import sl1 from '../../Images/sl1.jpg';
import sl2 from '../../Images/sl2.jpg';
import sl3 from '../../Images/sl3.jpg';
import sl4 from '../../Images/sl4.jpg';
import sl5 from '../../Images/sl5.jpg';
import sl6 from '../../Images/sl6.jpg';


const Gallery = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);


    let settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",


        autoplay: true,
        loop: true,


    };
    let settings2 = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "60px",


        autoplay: true,
        loop: true,


    };
    let mainSetting = '';
    if (width > 900) {
        mainSetting = settings;
    }
    else {
        mainSetting = settings2;
    }

    return (
        <>
            <MainDiv id='gallery'>
                <CarouselWrapper>

                    <Carousel   {...mainSetting}>

                        <Wrap>
                            <ImgHolder>
                                <Img src={sl1} />

                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder>
                                <Img src={sl2} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder>
                                <Img src={sl3} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder>
                                <Img src={sl4} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder>
                                <Img src={sl5} />
                            </ImgHolder>
                        </Wrap>
                        <Wrap>
                            <ImgHolder>
                                <Img src={sl6} />
                            </ImgHolder>
                        </Wrap>



                    </Carousel>
                </CarouselWrapper>
            </MainDiv>
        </>
    )
}

export default Gallery

const MainDiv = styled.div`
width:100vw;
height:450px;
display:flex;
align-items:center;
justify-content:center;
`;

const CarouselWrapper = styled.div`
width:100%;
height:400px;
display:flex;
align-items:center;
justify-content:center;
`;


const Carousel = styled(Slider)`
width: 100%;
height:400px;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrap = styled.div`
width:30vw;
height:300px;
background-color: #fff;
`;




const ImgHolder = styled.div`
width:30vw;
height:300px;
border-radius: 4px;
    
    
    display: block;
   
    
    height:100%;
/* box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px; */
`;

const Img = styled.img`
width:30vw;
height:300px;
object-fit: cover;
z-index:100;

@media screen and (max-width:900px){
    width:35vw;
}
`;

// const ShaderBox = styled.div`
// width: 100vw;
//   height: 400px;
//   background: rgba(0,0,0,0);
//   position: absolute;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   text-align: center;
//   z-index: 3;
//   padding:0 20px;
// `;

