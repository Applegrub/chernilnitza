import banner1 from "../../assets/images/Banners/BANNER1.png"
import banner2 from "../../assets/images/Banners/BANNER2.png"
import banner3 from "../../assets/images/Banners/BANNER3.png"
import React from "react";
import styled from "@emotion/styled";

type TBanner = 'banner1' | 'banner2' | 'banner3'
const bannerMap: Record<TBanner, string>
    ={
    banner1: banner1,
    banner2: banner2,
    banner3: banner3,
}

const Wrapper = styled.div`
@media screen and (max-width: 1280px){
& > img {
margin-bottom: 80px;
max-width: 936px;
max-height: 407px;
}}
`

const Banner:React.FunctionComponent<{ banner: TBanner }> = ({banner}) =>
    <Wrapper><img src={bannerMap[banner]} alt={banner}/></Wrapper>


    export default Banner;