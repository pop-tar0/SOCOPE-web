import React from "react";
import Post from "./Post";
import PosterPhoto1 from "./../../../assets/img/poster1-photo.png";
import PostImg1 from "./../../../assets/img/post-img1.png"
import { PostInterface } from "../../../interface/Post";

const PostBlock: React.FC = () => {
    const post1: PostInterface = {
        posterPhoto: PosterPhoto1, // 待改
        posterName: 'pop.dokyun_el',
        content: '哇嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎',
        timePassed: '15m',
        postImg: PostImg1,
        likeQty: 100,
    }

    return (
        <Post 
            posterPhoto={ post1.posterPhoto }
            posterName={ post1.posterName }
            content={ post1.content }
            timePassed={ post1.timePassed }
            postImg={ post1.postImg }
            likeQty={ post1.likeQty }
        />
    )
};

export default PostBlock;
