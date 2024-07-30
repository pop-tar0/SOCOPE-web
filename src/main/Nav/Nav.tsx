import React from 'react';
import Title from './Title';
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';

const Nav: React.FC = () => {
    return (
        <nav>
            <div className='container h-[10vh] 3xl:h-[7vh] mx-auto bg-sky-100 rounded-b-xl flex'>
                <Title />
                <Search />
                <div className='w-1/3 center'>
                    <Profile />
                    <Notification />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
