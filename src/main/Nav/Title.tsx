import React from 'react';

export interface TitleProps {
    logoIconUrl: string;
    logoTitleUrl: string;
}

const Title: React.FC<TitleProps> = ({ logoIconUrl, logoTitleUrl }) => {
    const socopeUrl: string = 'http://localhost:3000';

    return (
        <div className='w-1/3'>
            <a
                href={ socopeUrl }
                className='inline-flex items-center h-full w-auto ml-[8%] select-none'
            >
                <img
                    src={ logoIconUrl }
                    className='h-12'
                    alt=''
                />
                <img
                    src={ logoTitleUrl }
                    className='h-10'
                    alt=''
                />
            </a>
        </div>
    );
};

export default Title;
