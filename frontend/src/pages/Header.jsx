import React from 'react'
import logo from '../assets/lead_crafter_logo_remove_bg.png'
import chistats_logo from '../assets/chistat_logo.png'



const Header = () => {
    return (
        <nav className='flex justify-between w-full h-6 p-8 shadow-md realtive'>
            <p className='flex items-center text-2xl font-semibold text-[#616161]'><img src={logo} alt="logo" className='w-[60px] h-[60px] rounded-full '/>Lead<span className='text-[#1E1D5B]'>Crafter</span></p>

            <img src={chistats_logo} alt="chistats_logo" className='w-[120px] h-[25px] absolute right-6 top-5'/>
        </nav>
    )
}

export default Header