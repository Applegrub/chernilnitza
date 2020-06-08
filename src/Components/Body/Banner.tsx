import banner1 from "../../assets/images/Banners/BANNER1.png"
import banner2 from "../../assets/images/Banners/BANNER2.png"
import banner3 from "../../assets/images/Banners/BANNER3.png"
import React from "react";

type TBanner = 'banner1' | 'banner2' | 'banner3'
const bannerMap: Record<TBanner, string>
    ={
    banner1: banner1,
    banner2: banner2,
    banner3: banner3,
}

const Banner:React.FunctionComponent<{ banner: TBanner }> = ({banner}) =>
    <img src={bannerMap[banner]} alt={banner}/>


    export default Banner;