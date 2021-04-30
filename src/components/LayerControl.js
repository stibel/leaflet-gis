import React from "react";
import styled from "styled-components";
import LayerButton from "./LayerButton";
const ControlWrapper = styled.div`
  position: fixed;
  top: 12%;
  left: 1%;
  display: flex;
  flex-flow: row;
  height: 5vh;
  width: 20vw;
  background-color: aliceblue;
  z-index: 5;
`

const LayerControl = (props) => {
    return (
        <ControlWrapper>
            <LayerButton multiplier={12} onClick={props.modeHandler} value={"Tryb jasny/ciemny"}/>
            <LayerButton multiplier={8} onClick={props.ortophotoHandler} value={"Ortofotomapa"}/>
        </ControlWrapper>
    )
};

export default LayerControl;