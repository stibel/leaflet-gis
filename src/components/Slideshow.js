import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from "styled-components";
import atomsForPeace from "../images/slideshow/atomsForPeace.jpg";
import bulagarianNo from "../images/slideshow/bulgarianNo.jpg";
import fallout from "../images/slideshow/fallout.jpg";
import greatDanger from "../images/slideshow/greatDanger.jpg";
import germanNuclearWar from "../images/slideshow/germanNuclearWar.jpg";
import hungarian from "../images/slideshow/hungarian.png";
import hungarianConstitution from "../images/slideshow/hungarianConstitution.jpg";
import northKoreanAntiUS from "../images/slideshow/northKoreanAntiUS.jpg";
import protectAndSurvive from "../images/slideshow/protectAndSurvive.jpg";
import sovietArmsRace from "../images/slideshow/sovietArmsRace.jpg"
import sovietConsequencesOfWar from "../images/slideshow/sovietConsequencesOfWar.jpg";
import sovietEvolution from "../images/slideshow/sovietEvolution.jpg";
import sovietHeartbeat from "../images/slideshow/sovietHeartbeat.png";
import sovietPerspective from "../images/slideshow/sovietPerspective.jpg";
import sovietWarNotAllowed from "../images/slideshow/sovietWarNotAllowed.jpg";
import ukNoNukes from "../images/slideshow/ukNoNukes.jpg";
import usSurvivalUnderAtomicAttack from "../images/slideshow/usSurvivalUnderAtomicAttack.jpg";

const slideshowImages = [
    {
        id: 1,
        image: atomsForPeace,
        desc: "Atomy dla pokoju (USA)"
    },
    {
        id: 2,
        image: bulagarianNo,
        desc: "NIE! (Bułgaria)"
    },
    {
        id: 3,
        image: fallout,
        desc: "Możesz ochronić się przed opadem radioaktywnym (USA)"
    },
    {
        id: 4,
        image: greatDanger,
        desc: "Uzbrojenie to wielkie zagrożenie dla świata (Polska)"
    },
    {
        id: 5,
        image: hungarian,
        desc: "Broń się (Węgry)"
    },
    {
        id: 6,
        image: hungarianConstitution,
        desc: "Pełnienie obowiązków w zakresie ochrony ludności to patriotyczny obowiązek! (Węgry)"
    },
    {
        id: 7,
        image: northKoreanAntiUS,
        desc: "Wypleńmy przyczynę wojny nuklearnej! (Korea Płn.)"
    },
    {
        id: 8,
        image: protectAndSurvive,
        desc: "Chroń i przetrwaj (USA)"
    },
    {
        id: 9,
        image: sovietConsequencesOfWar,
        desc: "Zapobiec wojnie nuklearnej! (ZSRR)"
    },
    {
        id: 10,
        image: sovietEvolution,
        desc: "Ewolucja? (ZSRR)"
    },
    {
        id: 11,
        image: sovietHeartbeat,
        desc: "Wojna jądrowa (ZSRR)"
    },
    {
        id: 11,
        image: sovietPerspective,
        desc: "Perspektywa (ZSRR)"
    },
    {
        id: 12,
        image: sovietWarNotAllowed,
        desc: "Nie możemy dopuścić do wojny jądrowej! (ZSRR)"
    },
    {
        id: 13,
        image: sovietArmsRace,
        desc: "Wyścig zbrojeń - wyścig śmierci (ZSRR)"
    },
    {
        id: 14,
        image: germanNuclearWar,
        desc: "Wojnie atomowej - nie (Szwajcaria)"
    },
    {
        id: 15,
        image: ukNoNukes,
        desc: "Żadnej broni atomowej (UK)"
    },
    {
        id: 16,
        image: usSurvivalUnderAtomicAttack,
        desc: "Przetrwanie ataku atomowego (USA)"
    },
]

//Fisher-Yates shuffle algorithm
const shuffle = (array) => {
    let i, j, x;

    for (i = array.length - 1; i > 0; --i) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

const DescriptionWrapper = styled.p`
  padding: 1%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: Bahnschrift;
  -webkit-text-fill-color: #B08C19;
  text-align: center;
  align-items: center;
`

const SlideContainer = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 10vh;
  width: 20vw;
  max-height: 90vh;
  background-color: inherit;
  align-items: center;
  justify-content: center;
`

const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    scale: 0.4,
    arrows: false
};

const Slideshow = () => {

    //random order of images for some variety
    const imgArray = shuffle(slideshowImages);

    return (
       <SlideContainer>
           <Zoom {...zoomOutProperties}>
               {
                   imgArray.map(
                       (slide) =>
                           <div key={slide.id}>
                               <img style={{padding: "0", margin: "0", width: "20vw"}} src={slide.image} alt={"slide"}/>
                               <DescriptionWrapper>{slide.desc}</DescriptionWrapper>
                           </div>
                       )
               }
           </Zoom>
       </SlideContainer>
    )
};

export default Slideshow;