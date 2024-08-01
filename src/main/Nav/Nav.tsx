import React from 'react';
import Title from './Title';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';

interface NavProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
}

const Nav: React.FC<NavProps> = ({ profilePhotoUrl, firstName, lastName }) => {
    return (
        <nav>
            <div className='container h-[10vh] 3xl:h-[7vh] mx-auto bg-sky-100 rounded-b-xl flex'>
                <Title />
                <Search />
                <div className='w-1/3 center'>
                    <Profile
                        profilePhotoUrl={ profilePhotoUrl }
                        firstName={ firstName }
                        lastName={ lastName }
                    />
                    <Notification />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
