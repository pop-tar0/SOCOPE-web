import React from "react";
import PostInput from "./PostInput/PostInput";
import PostBlock from "./PostBlock/PostBlock";

interface ArticleProps {
    profilePhotoUrl: string;
}

const Article: React.FC<ArticleProps> = ({ profilePhotoUrl }) => {
    return (
        <div className='w-full md:w-[65.8%] h-[86vh] 3xl:h-[89vh] bg-white rounded-xl p-3 overflow-y-auto'>
            <PostInput profilePhotoUrl={ profilePhotoUrl } />
            <PostBlock />
        </div>
    );
};

export default Article;
