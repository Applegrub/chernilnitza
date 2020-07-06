import React from 'react';
import { Fade } from 'react-slideshow-image';
import banner1 from "../../../assets/images/Banners/BANNER1.png"
import banner2 from "../../../assets/images/Banners/BANNER2.png"
import banner3 from "../../../assets/images/Banners/BANNER3.png"
import styled from "@emotion/styled";


const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: indicators,
    autoplay: true,
    arrows: false,
}

function indicators() {
    return <Indicator/>
}

const Slideshow: React.FunctionComponent = () => {
    return (
        <SlideContainer>
            <Fade {...fadeProperties}>
                <EachFade>
                    <ImageContainer>
                        <img src={banner1}  alt={''}/>
                    </ImageContainer>
                </EachFade>
                <EachFade>
                    <ImageContainer>
                        <img src={banner2} alt={''}/>
                    </ImageContainer>
                </EachFade>
                <EachFade>
                    <ImageContainer>
                        <img src={banner3} alt={''}/>
                    </ImageContainer>
                </EachFade>
            </Fade>
        </SlideContainer>
    )
}
export default Slideshow;

const SlideContainer = styled.div`
width: 1144px;
@media screen and (max-width: 1280px){
width: 80%;
}
`
const EachFade = styled.div`
display: flex;
`
const ImageContainer = styled.div`
overflow: hidden;
& > img{
width: 1144px;
height: 498px;
@media screen and (max-width: 1280px){
width: 936px;
height: 407px;
}}
`
const Indicator = styled.div`
@media screen and (max-width: 1280px){
display: none;
}
`
