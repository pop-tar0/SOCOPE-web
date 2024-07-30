import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MoreBtn: React.FC = () => {
    return (
        <div className='h-10 w-10 rounded-full center text-gray-300 hover:bg-gray-100 cursor-pointer text-xl'>
            <FontAwesomeIcon icon={ faEllipsisH } />
        </div>
    );
};

export default MoreBtn;
