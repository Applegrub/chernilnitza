import React from "react";
import post1 from '../../assets/images/Post/Post1.svg'
import post2 from '../../assets/images/Post/Post2.svg'
import post3 from '../../assets/images/Post/Post3.svg'

type TPost = 'post1' | 'post2' | 'post3'

let postMap : Record<TPost, string>
={
    post1: post1,
    post2: post2,
    post3: post3,
}

const Post: React.FunctionComponent<{post:TPost}> = ({post}) =>
    <img src={postMap[post]} alt={post}/>

    export default Post;