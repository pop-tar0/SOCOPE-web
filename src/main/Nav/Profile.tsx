import React from 'react';

interface ProfileProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
}
const Profile: React.FC<ProfileProps> = ({ profilePhotoUrl, firstName, lastName }) => {
    return (
        <div className='h-12 w-12 rounded-[20px] hover:opacity-80 cursor-pointer mr-2 overflow-hidden center select-none'>
            <img
                src={ profilePhotoUrl }
                alt=''
                className='h-full'
                title={ `${ firstName } ${ lastName }的主頁` }
            />
        </div>
    );
};

export default Profile;
