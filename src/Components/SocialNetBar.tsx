import React from "react";
import facebook from '../assets/images/SocialNetworks/facebook.svg';
import IG from '../assets/images/SocialNetworks/IG.svg';
import printerest from '../assets/images/SocialNetworks/printerest.svg';
import telegram from '../assets/images/SocialNetworks/telegram.svg';
import twitter from '../assets/images/SocialNetworks/twiter.svg';
import vk from '../assets/images/SocialNetworks/vk.svg';


type TIcon = 'instagram' | 'facebook' | 'twitter' | 'printerest' | 'telegram' | 'vk'
const iconMap: Record<TIcon, string>
    = {
    instagram: IG,
    facebook: facebook,
    twitter: twitter,
    printerest: printerest,
    telegram: telegram,
    vk: vk,
}


const Icon: React.FunctionComponent<{ icon: TIcon }> = ({icon}) =>
    <img src={iconMap[icon]} alt={icon}/>


export default Icon