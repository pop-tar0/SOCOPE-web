import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const PostForm: React.FC = () => {
    return (
        <form className='min-h-56 h-auto w-full flex flex-col justify-between'>
            <textarea
                id='comment'
                rows={4}
                className='h-[181px] w-full px-4 py-2 rounded-lg font-bold bg-white resize-none outline-none' placeholder='SAY SOMETHINGGGGG'
                required
            />
            <div className='flex justify-end'>
                <button
                    type='submit'
                    className='h-8 w-24 center text-center text-white bg-navy-blue rounded-lg hover:opacity-70'
                >
                    <FontAwesomeIcon icon={ faPaperPlane } />
                </button>                    
            </div>
        </form>
    );
};

export default PostForm;
