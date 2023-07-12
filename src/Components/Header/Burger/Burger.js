import styled from "styled-components";
import React, {useState} from 'react'

const BurgerContainer = styled.div`
    width: ${({size}) => {return 100 * size}}px;
    height: ${({size}) => {return 100 * size}}px;
    
    * {
        transition: all 0.5s ease-in-out;
    }

    position: relative;

    & .line {
        width: 100%;
        height: ${({size}) => {return 20 * size}}px;
        background-color: white;
        border-radius: 20px;
        position: absolute;
    }

    & .line:nth-child(1) {
        top: ${(props) => (props.isActive ? '50%' : '0')};
        transform: ${(props) => (props.isActive ? 'translateY(-50%) rotate(45deg)' : 'none')};
    }

    & .line:nth-child(2) {
        opacity: ${(props) => (props.isActive ? '0' : '1')};
        top: 50%;
        transform: translateY(-50%);
    }

    & .line:nth-child(3) {
        bottom: ${(props) => (props.isActive ? '50%' : '0')};
        transform: ${(props) => (props.isActive ? 'translateY(50%) rotate(-45deg)' : 'none')};
    }
`   

function Burger(props) {
    const { size, className, isActive } = props;

    return (
      <BurgerContainer className={className} size={size} isActive={isActive} onClick={() => { }}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </BurgerContainer>
    )
}

export default Burger