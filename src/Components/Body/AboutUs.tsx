import React from "react";
import aboutUs1 from "../../assets/images/About Us/aboutUs1.png"
import aboutUs2 from "../../assets/images/About Us/aboutUs2.png"
import aboutUs3 from "../../assets/images/About Us/aboutUs3.png"
import aboutUs4 from "../../assets/images/About Us/aboutUs4.png"

type TAboutUs = 'aboutUs1' | 'aboutUs2' | 'aboutUs3' | 'aboutUs4'

let aboutUsMap: Record<TAboutUs, string>
={
    aboutUs1: aboutUs1,
    aboutUs2: aboutUs2,
    aboutUs3: aboutUs3,
    aboutUs4: aboutUs4,
}

const AboutUs: React.FunctionComponent<{aboutUs: TAboutUs}> = ({aboutUs}) =>
    <img src={aboutUsMap[aboutUs]} alt={aboutUs}/>

    export default AboutUs;