import React from "react";
import contactUs from "../../assets/images/Goods/contactUs.png"
import jesus1 from "../../assets/images/Goods/jesus1.png"
import jesus2 from "../../assets/images/Goods/jesus2.png"
import jesus3 from "../../assets/images/Goods/jesus3.png"
import oldAge1 from "../../assets/images/Goods/oldAge1.png"
import oldAge2 from "../../assets/images/Goods/oldAge2.png"
import oldAge3 from "../../assets/images/Goods/oldAge3.png"
import oldAgeWithPrise from "../../assets/images/Goods/oldAgeWithPrise.png"
import oldAgeExclusive from "../../assets/images/Goods/oldAgeExclusive.png"
import withLove1 from "../../assets/images/Goods/withLove1.png"
import withLove2 from "../../assets/images/Goods/withLove2.png"
import withLove3 from "../../assets/images/Goods/withLove3.png"
import youAreGood from "../../assets/images/Goods/youAreGood.png"
import styled from "@emotion/styled";

type TGood = 'contactUs' | 'jesus1'| 'jesus2'| 'jesus3'|
    'oldAge1'| 'oldAge2'| 'oldAge3'| 'oldAgeWithPrise'| 'oldAgeExclusive'|
    'withLove1' | 'withLove2' | 'withLove3' | 'youAreGood'
let goodMap: Record<TGood, string>;
goodMap = {
    contactUs: contactUs,
    jesus1: jesus1,
    jesus2: jesus2,
    jesus3: jesus3,
    oldAge1: oldAge1,
    oldAge2: oldAge2,
    oldAge3: oldAge3,
    oldAgeWithPrise: oldAgeWithPrise,
    oldAgeExclusive: oldAgeExclusive,
    withLove1: withLove1,
    withLove2: withLove2,
    withLove3: withLove3,
    youAreGood: youAreGood,
};

const Item = styled.div`
grid-area: g;
`

const Good: React.FunctionComponent<{good:TGood}> = ({good}) =>
    <img src={goodMap[good]} alt={good}/>

    export default Good;