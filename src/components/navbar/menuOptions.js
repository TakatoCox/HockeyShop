import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MenuContainer = () => {

    const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: flex-start;
    height:100%;
    background: none;
    width: 60%;
    padding-left:8%;
    `;

    const Item = styled.div`
    margin:10px;
    font-size: 20px;
    color:rgb(190, 190, 190);
    border-style:solid;
    border-color: rgb(0, 71, 179);
    @media(max-width: 500px){
        margin:5px;
        font-size:15px;
    }
    :hover{
        border-style:solid;
        border-color: white;
        cursor: pointer;
        margin-bottom:2px;
    }
    `;

    return ( 
        <Options>
            <Link to="/sticks" style={{textDecoration:'none'}}>
                <Item>Sticks</Item>                
            </Link>
            <Link to="/skates" style={{textDecoration:'none'}}>
                <Item>Skates</Item>
            </Link>
            <Link to="/helmets" style={{textDecoration:'none'}}>
                <Item>Helmets</Item>                
            </Link>
            <Link to="/undergear" style={{textDecoration:'none'}}>
                <Item>Undergear</Item>                
            </Link>
            <Link to="/padding" style={{textDecoration:'none'}}>
                <Item>Padding</Item>                
            </Link>
        </Options> 
     );
}
 
export default MenuContainer