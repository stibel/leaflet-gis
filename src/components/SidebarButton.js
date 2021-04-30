import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding: 0;
  display: flex;
  text-align: center;
  font-family: Bahnschrift;
  -webkit-text-fill-color: #325886;
  text-shadow: 0.5px 0.5px #000000;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 10%;
  background-color: #B08C19;
  border: solid 0.25vh #325886;
  z-index: 10;
  cursor: pointer;
  
  @keyframes change{
    0% {
      -webkit-text-fill-color: #325886;
      background-color: #B08C19;
      border: solid 0.25vh #325886;
    }
    100% {
      background-color: #325886;
      -webkit-text-fill-color: #B08C19;
      border: solid 0.25vh #B08C19;
    }
  }
  
  &:hover {
    animation: change 0.5s;
    -webkit-animation-fill-mode: forwards;
    
  }
`

const SidebarButton = (props) => {

    return (
        <ButtonWrapper onClick={props.onClick}>
            <p>{props.value}</p>
        </ButtonWrapper>
    )
}

export default SidebarButton