import React from "react";
import SelectImgBtn from "./SelectImgBtn";
import SelectLocationBtn from "./SelectLocationBtn";
import SelectMoodBtn from "./SelectMoodBtn";
import PostForm from "./PostForm";

interface PostInputProps {
    profilePhotoUrl: string;
}

const PostInput: React.FC<PostInputProps> = ({ profilePhotoUrl }) => {
    return (
        <div className='bg-gray-100 min-h-60 h-auto w-full rounded-lg p-3 flex'>
            <div className='h-56 flex flex-col justify-between mr-3'>
                <a
                    href='#'
                    className='block h-24 w-24 rounded-lg overflow-hidden'
                >
                    <img
                        src={ profilePhotoUrl }
                        alt=''
                        className='h-full w-full'
                    />
                </a>
                <SelectImgBtn />
                <SelectLocationBtn />
                <SelectMoodBtn />
            </div>
            <PostForm />
        </div>
    );
};

export default PostInput;
