import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const SelectImgBtn: React.FC = () => {
    return (
        <button className='h-8 w-24 bg-gray-300 hover:opacity-70 text-white rounded-lg'>
            <FontAwesomeIcon icon={ faImage } />
        </button>
    );
};

export default SelectImgBtn;
