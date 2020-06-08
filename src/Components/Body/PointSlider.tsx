import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
margin: 30px 0 30px 0 ;
`
const PointSlider: React.FunctionComponent = () =>{
    return <Root>
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="black"/>
            <circle cx="50" cy="10" r="9" stroke="black" stroke-width="2"/>
            <circle cx="90" cy="10" r="9" stroke="black" stroke-width="2"/>
        </svg>
    </Root>
}
export default PointSlider