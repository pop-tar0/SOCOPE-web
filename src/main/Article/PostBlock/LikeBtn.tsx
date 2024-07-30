import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LikeBtn: React.FC = () => {
    return (
        <button className='h-8 w-20 rounded-lg center bg-gray-300 text-white hover:opacity-70'>
            <FontAwesomeIcon icon={ faHeart } />
        </button>
    );
}

export default LikeBtn;
