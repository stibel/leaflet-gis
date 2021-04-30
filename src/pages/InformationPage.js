import React from "react";
import styled from "styled-components";
import warRoom from "../images/background/warRoom.jpg"
import {NavLink} from "react-router-dom";

const PageWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImageWrapper = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`

const InfoWrapper = styled.main`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-flow: row;
  background-color: #43445F;
  border-radius: 10%;
  z-index: 1;
  position: absolute;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  border-radius: 10%;
  background-color: #333342;
`

const TextWrapper = styled.div`
  margin: 5%;
  font-family: Bahnschrift;
  -webkit-text-fill-color: #B08C19;
`

const NavWrapper = styled.nav`
  height: 100%;
  width: 20%;
  display: flex;
  flex-flow: column;
  margin: 1%;
  border-radius: 10%;
  font-family: Bahnschrift;
`
const ItemWrapper = styled.div`
  display: flex;
  font-size: 2vh;
  margin-top: 2vh;
  
  @keyframes shadow{
    100% {
      text-shadow: 3px 3px #000000;
    }
  }
  
  &:hover {
    animation: shadow 0.2s;
    -webkit-animation-fill-mode: forwards;
  }
`

const style = {
    textDecoration: "none",
    color: "#B08C19"
}

const activeStyle = {
    textShadow: "3px 3px #000000"
}

const InformationPage = (props) => {
    return(
        <PageWrapper>
            <ImageWrapper src={warRoom} alt={"war rooom"} />
            <InfoWrapper>
                <ContentWrapper>
                    <TextWrapper>
                        <p>{props.valueOne}</p>
                        <p>{props.valueTwo}</p>
                    </TextWrapper>
                </ContentWrapper>
                <NavWrapper>
                    <ItemWrapper>
                        <NavLink
                            to="/Author"
                            style={style}
                            activeStyle={activeStyle}
                        >
                            O autorze
                        </NavLink>
                    </ItemWrapper>
                    <ItemWrapper>
                        <NavLink
                            to="/LRA"
                            style={style}
                            activeStyle={activeStyle}
                        >
                            Lotnictwo Dalekiego Zasięgu
                        </NavLink>
                    </ItemWrapper>
                    <ItemWrapper>
                        <NavLink
                            to="/USAF"
                            style={style}
                            activeStyle={activeStyle}
                        >
                            Siły Powietrzne Stanów Zjednoczonych
                        </NavLink>
                    </ItemWrapper>
                    <ItemWrapper>
                        <NavLink
                            to="/PLAAF"
                            style={style}
                            activeStyle={activeStyle}
                        >
                            Siły Powietrzne Chińskiej Armii Ludowo-Wyzwoleńczej
                        </NavLink>
                    </ItemWrapper>
                </NavWrapper>
            </InfoWrapper>
        </PageWrapper>
    )
}

export default InformationPage