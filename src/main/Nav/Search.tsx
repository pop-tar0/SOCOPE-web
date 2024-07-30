import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search: React.FC = () => {
    return (
        <form className='w-1/3 flex'>
            <div className='relative h-10 w-4/5 my-auto mx-auto'>
                <input
                    type="text"
                    placeholder='SEARCH'
                    className='absolute rounded-full font-bold outline-none w-full pl-5 h-10 no-select-placeholder'
                />
                <button
                    type='submit'
                    className='absolute rounded-full h-8 w-8 bg-navy-blue text-white hover:opacity-70 right-1 top-1/2 -translate-y-1/2'
                >
                    <FontAwesomeIcon icon={ faSearch } />
                </button>
            </div>
        </form>
    );
}

export default Search;
