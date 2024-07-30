import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notification: React.FC = () => {
    return (
        <div className='h-12 w-12 rounded-[20px] bg-white hover:opacity-70 cursor-pointer ml-2 text-navy-blue text-2xl center'>
            <FontAwesomeIcon icon={ faBell } />
        </div>
    );
};

export default Notification;
