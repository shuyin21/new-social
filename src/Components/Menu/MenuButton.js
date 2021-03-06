import React from 'react';
import styled from 'styled-components';

const MenuButton = (props) => {




    return (
        <>
            <MButton style={props.active} onChange={props.isActive} onClick={props.func}>{props.name}</MButton>
        </>
    )
}

export default MenuButton


const MButton = styled.button`
margin: 50px 15px;
  padding: 10px 20px;
  border: 1px solid #8F7056;
  border-radius: 3px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
 

 @media screen and (max-width:768px){
     margin:10px 15px;
 }
`;