import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
margin: 20px -10px;
display: flex;
& > * {
margin: 10px;
}
`
const Circle = styled.div`
width: 20px;
height: 20px;
border-radius: 20px;
border: 2px solid #000000;
box-sizing: border-box;
`
const PointSlider: React.FunctionComponent = () =>{
    return <Root>
        <Circle/>
        <Circle/>
        <Circle/>
    </Root>
}
export default PointSlider