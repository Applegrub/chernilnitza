import React from "react";
import styled from "@emotion/styled";
import Post from "../Post";
import {GoodsSeriesNameDiv, Name} from "../OneLineSeries";



const Shipment:React.FunctionComponent = ()=>
    <Root>
        <GoodsSeriesNameDiv><Name>Доставим хоть чёрту в жопу</Name></GoodsSeriesNameDiv>
        <PostPosition>
            <Post post={"post1"}/>
            <Post post={"post2"}/>
            <Post post={"post3"}/>
        </PostPosition>
        <GoodsSeriesNameDiv><Name>Это заглушка, ребят. Дизайнер не проработал эту страницу</Name></GoodsSeriesNameDiv>
    </Root>

export default Shipment;

const Root = styled.div`
display: grid;
justify-items: center;
`
const PostPosition = styled.div`
display: flex;
margin: 34px 0 80px;
& > *{
margin: 10px;
}
`