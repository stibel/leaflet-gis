import React from 'react'
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import globe from "../images/logos/globe.png";

const ImageWrapper = styled.img`
  width: 75%;
  z-index: 5;
`

const ButtonWrapper = styled.div`
  width: 5vw;
  height: 5vw;
  margin-left: 0.5%;
  position: absolute;
  display: flex;
  text-align: center;
  border: 2% solid black;
  border-radius: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: darkred;
  z-index: 2;
  -webkit-text-fill-color: azure;
  font-family: Bahnschrift;
  
  &:hover {
    cursor: pointer;
  }
  
`

const BackgroundWrapper = styled.div`
  width: 12vw;
  height: 6vw;
  display: flex;
  flex-flow: row;
  background-color: dimgrey;
  border-radius: 10%;
  
  &:hover {
    cursor: default;
  }
`

const Button = () => {

    const history = useHistory();

    const handleHistory = () => {
        history.push("/Map")
    }

    return (
        <BackgroundWrapper>
            <ButtonWrapper onClick={handleHistory}><ImageWrapper src={globe} alt={"globe"} /></ButtonWrapper>
        </BackgroundWrapper>
    )
}

export default Button;