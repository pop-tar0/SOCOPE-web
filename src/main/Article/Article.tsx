import React from "react";
import PostInput from "./PostInput/PostInput";
import PostBlock from "./PostBlock/PostBlock";

const Article: React.FC = () => {
    return (
        <div className='w-full md:w-[65.8%] h-[86vh] 3xl:h-[89vh] bg-white rounded-xl p-3 overflow-y-auto'>
            <PostInput />
            <PostBlock />
        </div>
    );
};

export default Article;
