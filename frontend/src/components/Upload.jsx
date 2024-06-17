import React, { useContext, useEffect, useRef, useState } from 'react'
import img from '../assets/analyze_img.svg'
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate()

    // handleClick function
    const handleClick = () => {
        navigate('/')
    }
    return (
        <section className='pt-4 pb-6'>
            <h3 className='text-[22px] font-bold text-[#1E1D5B]'>LEAD CRAFTER - Analyze your Leads!</h3>

            <div className='flex justify-between p-6 mx-auto mt-8 bg-white rounded-lg shadow-md w-fit gap-x-20'>
                {/* Display the data */}
                <div className='flex flex-col justify-center mb-6'>
                    <h3 className='text-lg text-[#1E1D5B] font-semibold'>We help you analyze your leads better</h3>
                    <p className='mt-3 text-[#2e2c89]'>Our goal is to carve out the best leads from your humongous data!</p>
                        <button className={`bg-[#1E1D5B] text-white px-4 py-2 rounded-md mt-5 w-fit`} onClick={handleClick}>Upload File</button>

                </div>

                {/* Image Display */}
                <img src={img} alt="analyze_image" />

            </div>

        </section>
    )
}

export default Upload