import React from 'react'
import logo from '../assets/lead_crafter_logo_remove_bg.png'
import chistats_logo from '../assets/chistat_logo.png'

const Header = () => {
    return (
        <nav className='flex justify-between w-full h-6 p-8 shadow-md'>
            <p className='flex items-center text-2xl font-semibold text-[#616161]'><img src={logo} alt="logo" className='w-[60px] h-[60px] rounded-full '/>Lead<span className='text-[#1E1D5B]'>Crafter</span></p>

            <p className='flex items-center gap-x-2'>Powered By <img src={chistats_logo} alt="chistats_logo" className='w-[110px] h-[20px]'/></p>
        </nav>
    )
}

export default Header