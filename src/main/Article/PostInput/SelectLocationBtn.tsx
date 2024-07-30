import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SelectLocationBtn: React.FC = () => {
    return (
        <button className='h-8 w-24 bg-gray-300 hover:opacity-70 text-white rounded-lg'>
            <FontAwesomeIcon icon={ faMapMarkerAlt } />
        </button>
    );
};

export default SelectLocationBtn;
