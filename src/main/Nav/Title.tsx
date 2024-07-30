import React from 'react';
import logo from './../../assets/img/logo.png';
import logoName from './../../assets/img/logo-name.png';

const Title: React.FC = () => {
    const socopeUrl: string = 'http://localhost:3000';

    return (
        <div className='w-1/3'>
            <a
                href={ socopeUrl }
                className='inline-flex items-center h-full w-auto ml-[8%] select-none'
            >
                <img
                    src={ logo }
                    className='h-12'
                    alt=''
                />
                <img
                    src={ logoName }
                    className='h-10'
                    alt=''
                />
            </a>
        </div>
    );
};

export default Title;
