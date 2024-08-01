import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import MoreBtn from "./MoreBtn";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import ShareBtn from "./ShareBtn";

interface PostProps {
    posterPhotoUrl: string;
    posterName: string;
    content: string;
    timePassed: string;
    postImgUrl: string;
    likeQty: number;
}

const Post: React.FC<PostProps> = ({ posterPhotoUrl, posterName, content, timePassed, postImgUrl, likeQty }) => {
    return (
        <div className='bg-gray-100 h-auto w-full rounded-lg p-3 mt-3 flex'>
            <div className='mr-3 flex flex-col'>
                <a
                    href='#'
                    className='block h-24 w-24 rounded-lg overflow-hidden'
                >
                    <img
                        src={ posterPhotoUrl }
                        alt=''
                        className='h-full w-full'
                    />
                </a>
                <a
                    href='#;'
                    className='h-5 w-24 rounded-lg bg-gray-300 text-white mt-3 font-bold text-2xs center hover:underline'
                >
                    @
                    <span>{ posterName }</span>
                </a>
            </div>
            <div className='h-auto w-full bg-white rounded-lg p-3'>
                <div className='flex justify-between'>
                    <span className='h-auto inline-block flex-grow pt-2 pr-2'>
                        { content }
                    </span>
                    <div className='flex'>
                        <span className='inline-block center text-gray-300 h-10 w-12 text-sm font-bold mr-2'>
                            <FontAwesomeIcon
                                icon={ faClock }
                                className='inline-block w-6'
                            />
                            { timePassed }
                        </span>
                        <MoreBtn />
                    </div>
                </div>
                <img
                    src={ postImgUrl }
                    alt=''
                    className='w-full mt-3 rounded-lg'
                />
                <div className='flex justify-between items-center h-6 mt-3'>
                    <span className='text-navy-blue'>
                        <FontAwesomeIcon icon={ faHeart } />
                        <span className='cursor-pointer hover:underline ml-2 font-bold'>{ likeQty }</span>
                    </span>
                    <div className='flex w-[260px] justify-between'>
                        <LikeBtn />
                        <CommentBtn />
                        <ShareBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
