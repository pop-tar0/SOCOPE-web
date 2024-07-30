import React from 'react';
import profilePhoto from './../../assets/img/profile-photo.png';

const Profile: React.FC = () => {
    return (
        <div className='h-12 w-12 rounded-[20px] hover:opacity-80 cursor-pointer mr-2 overflow-hidden center select-none'>
            <img
                src={ profilePhoto }
                alt=''
                className='h-full'
            />
        </div>
    );
};

export default Profile;
