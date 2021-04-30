import React from 'react';
import Slideshow from "../components/Slideshow";
import Button from "../components/Button";
import styled, {keyframes} from "styled-components";
import logo1024 from "../images/logos/logo1024.png";

const PageWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-flow: column;
  background-color: #43445F;
`
const ContentWrapper = styled.main`
  height: 90%;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LHSWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50vw;
`

const RHSWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50vw;
`

const ImageWrapper = styled.img`
  width: 50%;
  height: auto;
  animation: infinite 60s ${spin} linear;
`

const HomePage = () => {

    return (
        <PageWrapper>
            <ContentWrapper>
                <LHSWrapper>
                    <Slideshow />
                </LHSWrapper>
                <RHSWrapper>
                    <ImageWrapper src={logo1024} alt="logo" />
                    <Button />
                </RHSWrapper>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default HomePage