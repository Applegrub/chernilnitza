import React from "react";
import post1 from '../../assets/images/Post/Post1.svg'
import post2 from '../../assets/images/Post/Post2.svg'
import post3 from '../../assets/images/Post/Post3.svg'
import styled from "@emotion/styled";

export type TPost = 'post1' | 'post2' | 'post3'
let postMap: Record<TPost, string>;
postMap = {
    post1: post1,
    post2: post2,
    post3: post3,
};

const Wrapper = styled.div`
& > img {
@media screen and (max-width: 1280px){
width: 302px;
height: 302px;
}}
`
const Post: React.FunctionComponent<{post:TPost}> = ({post}) =>
    <Wrapper><img src={postMap[post]} alt={post}/></Wrapper>

export default Post;