import React from 'react'
import {NavLink} from 'react-router-dom';
import MyClock from "./Clock";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 0;
  margin: 0;
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-flow: row;
  background-color: #325886;
`

const NavWrapper = styled.nav`
  padding: 0;
  margin: 0;
  height: 10vh;
  width: 95vw;
  display: flex;
  flex-flow: row;
  justify-content: left;
  background-color: inherit;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 5%;
  font-family: Bahnschrift;
  font-size: 5vh;
  font-weight: bold;
  -webkit-text-fill-color: #B08C19;

  @keyframes shadow{
    100% {
      text-shadow: 5px 5px #000000;
    }
  }

  &:hover {
    animation: shadow 0.2s;
    -webkit-animation-fill-mode: forwards;
  }
`

const ClockWrapper = styled.div`
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: right;
`

const style = {
    textDecoration: "none",
    color: "#B08C19"
}

const activeStyle = {
    textShadow: "5px 5px #000000"
}

const Header = () => {
    return(
        <HeaderWrapper>
            <NavWrapper>
                <ItemWrapper>
                    <NavLink
                        exact to="/"
                        style={style}
                        activeStyle={activeStyle}
                    >
                    Strona Główna
                    </NavLink>
                </ItemWrapper>
                <ItemWrapper>
                    <NavLink
                        to="/Map"
                        style={style}
                        activeStyle={activeStyle}
                    >
                        Sala Wojenna
                    </NavLink>
                </ItemWrapper>
                <ItemWrapper>
                    <NavLink
                        to="/Info"
                        style={style}
                        activeStyle={activeStyle}
                    >
                        Informacje
                    </NavLink>
                </ItemWrapper>
            </NavWrapper>
            <ClockWrapper>
                    <MyClock />
            </ClockWrapper>
        </HeaderWrapper>
    )
}

export default Header;