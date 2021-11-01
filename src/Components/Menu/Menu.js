import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

import menuBg from '../../Images/superGreens.jpg';
import { MenuData } from './MenuData';



const Data = MenuData;
const Menu = (props) => {

    const [deliActive, setdeliActive] = useState(false);
    const [mainActive, setMainActive] = useState(true);
    const [acaiActive, setacaiActive] = useState(false);
    const [coffeeActive, setCoffeeActive] = useState(false);
    const [drinksActive, setDrinksActive] = useState(false);
    const [activeValue, setActiveValue] = useState('mains');


    function activatedeli() {
        setdeliActive(true);
        setMainActive(false);
        setacaiActive(false);
        setDrinksActive(false);
        setCoffeeActive(false);
        setActiveValue('deli');

    }

    const activateMain = () => {
        setMainActive(true);
        setdeliActive(false);
        setacaiActive(false);
        setDrinksActive(false);
        setCoffeeActive(false);
        setActiveValue('mains');
    }

    function activateacai() {
        setacaiActive(true);
        setdeliActive(false);
        setMainActive(false);
        setDrinksActive(false);
        setCoffeeActive(false);
        setActiveValue('acai');
    }
    function activateCoffee() {
        setacaiActive(false);
        setdeliActive(false);
        setMainActive(false);
        setDrinksActive(false);
        setCoffeeActive(true);
        setActiveValue('coffee');
    }
    function activateDrinks() {
        setacaiActive(false);
        setdeliActive(false);
        setMainActive(false);
        setDrinksActive(true);
        setCoffeeActive(false);
        setActiveValue('drinks');
    }
    var BgColorMain = {};
    var BgColordeli = {};
    var BgColoracai = {};
    var BgColordrinks = {};
    var BgColorcoffee = {};

    if (deliActive) { BgColordeli = { backgroundColor: '#d0a37c', color: 'white' }; BgColorMain = { backgroundColor: '' }; BgColoracai = { backgroundColor: '' }; BgColorcoffee = { backgroundColor: '' }; BgColordrinks = { backgroundColor: '' } }
    else if (mainActive) { BgColorMain = { backgroundColor: '#d0a37c', color: 'white' }; BgColordeli = { backgroundColor: '' }; BgColoracai = { backgroundColor: '' }; BgColorcoffee = { backgroundColor: '' }; BgColordrinks = { backgroundColor: '' } }
    else if (acaiActive) { BgColoracai = { backgroundColor: '#d0a37c', color: 'white' }; BgColordeli = { backgroundColor: '' }; BgColorMain = { backgroundColor: '' }; BgColorcoffee = { backgroundColor: '' }; BgColordrinks = { backgroundColor: '' } }
    else if (drinksActive) { BgColordrinks = { backgroundColor: '#d0a37c', color: 'white' }; BgColordeli = { backgroundColor: '' }; BgColorMain = { backgroundColor: '' }; BgColorcoffee = { backgroundColor: '' }; BgColoracai = { backgroundColor: '' } }
    else if (coffeeActive) { BgColorcoffee = { backgroundColor: '#d0a37c', color: 'white' }; BgColordeli = { backgroundColor: '' }; BgColorMain = { backgroundColor: '' }; BgColordrinks = { backgroundColor: '' }; BgColoracai = { backgroundColor: '' } }


    // { deliActive ? BgColordeli = { backgroundColor: '#ffc600' } : BgColordeli = { backgroundColor: '' } }
    // { mainActive ? BgColorMain = { backgroundColor: '#ffc600' } : BgColorMain = { backgroundColor: '' } }
    // { acaiActive ? BgColoracai = { backgroundColor: '#ffc600' } : BgColoracai = { backgroundColor: '' } }




    return (
        <>

            <MenuDiv id='menu'>
                <BannerImg>
                    <Box>
                        <HeaderHolder>
                            <h2>Our Menu</h2>
                        </HeaderHolder>
                    </Box>


                </BannerImg>
                <MenuWrapper>


                    <ButtonsWrapper>
                        <MenuButton active={BgColorcoffee} func={activateCoffee} name={'coffee & tea'}></MenuButton>
                        <MenuButton active={BgColordeli} func={activatedeli} name={'deli & sweets'}></MenuButton>
                        <MenuButton active={BgColoracai} func={activateacai} name={'acai'}></MenuButton>
                        <MenuButton active={BgColorMain} func={activateMain} name={'mains'}></MenuButton>
                        <MenuButton active={BgColordrinks} func={activateDrinks} name={'Cold drinks'}></MenuButton>





                    </ButtonsWrapper>

                    <MenuItemWrapper>

                        {Data.filter(x => x.menus === activeValue).map((data) => (
                            <MenuItemDiv key={data.id}>
                                <MenuItem >
                                    <ItemHeader>{data.itemName}</ItemHeader>
                                    <ItemDots />
                                    <ItemPrice>£{data.itemPrice}</ItemPrice>
                                </MenuItem><ItemDescription>{data.itemDescription}</ItemDescription>

                            </MenuItemDiv>


                        ))}

                    </MenuItemWrapper>


                </MenuWrapper>
            </MenuDiv>
        </>
    )
}

export default Menu;

const BannerImg = styled.div`
width:95vw;
height:400px;
background-image: url(${menuBg});
background-size: cover;
object-fit: cover;
box-shadow: 2px 2px #000;
margin:0 10px;
display: flex;
align-items: center;
position: relative;

@media screen and (max-width: 1000px){
    margin:0;
}
`;
const Box = styled.div`
width: 95vw;
  height: 400px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 
`;

const MenuDiv = styled.div`

width: 100vw;

/* background-image:url(${menuBg}); */
background-color: #fff;
background-size: cover;
object-fit: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
 
}
`;

const MenuWrapper = styled.div`
width:60%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:20px;
 


@media screen and (max-width:1200px){
    width:100%;
    padding:10px;
}
`;

const HeaderHolder = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100%;

margin:0px 0 50px;


h2 {
  
    color: white;
  font-size: 32px;
  margin: 0;
  transform: translate(-50%,-50%);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  text-shadow: 1px 1px #d0a37c;
  font: 60px cookie, cursive;
}

`;

const ButtonsWrapper = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin:20px 0;



`;



const MenuItemDiv = styled.div`
display:flex;
flex-direction: column;
`;


const MenuItemWrapper = styled.div`
display:grid;
width: 100%;
grid-template-columns:50% 50% ;

grid-column-gap: 5%;
justify-content: space-between;
align-items: space-between;

@media screen and (max-width:1200px){
    display:flex;
    flex-direction: column;
}



`;
const MenuItem = styled.div`
display:flex;
max-width: 80%;
align-items: baseline;

@media screen and (max-width:768px){
    justify-content: center;
    max-width: 100%;
}

`;

const ItemHeader = styled.h3`
font: 25px cookie, cursive;
    color: #d0a37c;
    letter-spacing: 2px;
    margin: 0 0 10px;

`;

const ItemDots = styled.span`
flex: 1;
    border-bottom: 1px dashed #8F7056;
    margin: 0 15px;

`;

const ItemPrice = styled.span`
color: #ffc600;
    font: 20px cookie, cursive;

`;

const ItemDescription = styled.p`
margin-bottom: 40px;
max-width: 70%;
color:#000;



`;