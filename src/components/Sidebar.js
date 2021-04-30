import React from 'react'
import styled from "styled-components";
import SidebarButton from "./SidebarButton";

const SidebarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 90vh;
  width: 15vw;
  background-color: #325886;
  z-index: 5;
`

const OptionsWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-flow: column;
`

const Sidebar = (props) => {

    console.log(props.activeLayers);

    const handler = (bases) => {
        if (props.activeLayers.includes(bases)) {
            const copy = props.activeLayers;
            const index = copy.indexOf(bases);
            if (index > -1)
            copy.splice(index, 1)
            props.set([...copy]);
            if(bases === "PPA")
                props.returnHandler();
        }
        else {
            props.set(prevState => [...prevState, bases]);
            if(bases === "PPA") {
                props.pNukesHandler();
                props.setPZGiK(true);
                props.setOrtophoto(false);
            }
        }

        console.log('handler');
        console.log(props.activeLayers);
    }

    return(
        <SidebarWrapper>
            <OptionsWrapper>
                <SidebarButton onClick={() => handler("LRA")} name={"LRA"} value={"Bazy Lotnictwa Dalekiego Zasięgu"}/>
                <SidebarButton onClick={() => handler("USAF")} name={"USAF"} value={"Bazy Sił Powietrznych Stanów Zjednoczonych"}/>
                <SidebarButton onClick={() => handler("PLAAF")} name={"PLAAF"} value={"Bazy Sił Powietrznych Chińskiej Armii Ludowo-Wyzwoleńczej"}/>
                <SidebarButton onClick={() => handler("PPA")} value={"Broń atomowa w Polsce"}/>
                <SidebarButton onClick={() => props.fly()} value={"Bombardowanie Hiroszimy i Nagasaki"}/>
            </OptionsWrapper>
            <SidebarButton onClick={() => props.returnHandler()} value={"Powrót"}/>
        </SidebarWrapper>
    )
}

export default Sidebar;