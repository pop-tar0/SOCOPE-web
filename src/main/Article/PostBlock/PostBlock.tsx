import React from "react";
import Post from "./Post";
import PosterPhoto1 from "./../../../assets/img/poster1-photo.png";
import PostImg1 from "./../../../assets/img/post-img1.png"
import { PostInterface } from "../../../interface/Post";

const PostBlock: React.FC = () => {
    const post1: PostInterface = {
        posterPhotoUrl: PosterPhoto1, // 待改
        posterName: 'pop.dokyun_el',
        content: '哇嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎嘎',
        timePassed: '15m',
        postImgUrl: PostImg1,
        likeQty: 100,
    }

    return (
        <Post 
            posterPhotoUrl={ post1.posterPhotoUrl }
            posterName={ post1.posterName }
            content={ post1.content }
            timePassed={ post1.timePassed }
            postImgUrl={ post1.postImgUrl }
            likeQty={ post1.likeQty }
        />
    )
};

export default PostBlock;
