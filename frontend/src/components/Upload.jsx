import { Tooltip } from '@material-tailwind/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate()

    // handleClick function
    const handleClick = () => {
        navigate('/')
    }
    return (
        <section className='relative'>

            <Tooltip content = 'Add new file'>
            <button className={`bg-[#1E1D5B] text-white absolute right-0 top-10 p-3 rounded-full hover:animate-pulse  ease-in`} onClick={handleClick}> <FaFileAlt className='text-lg'/> </button>
            </Tooltip>

        </section>
    )
}

export default Upload