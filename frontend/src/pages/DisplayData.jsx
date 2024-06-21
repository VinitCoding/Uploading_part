import React from 'react'
import Upload from '../components/Upload'
import CraftedLeads from '../components/CraftedLeads'
import { useLocation } from 'react-router-dom'
import Graphs from '../components/Graphs'
import powered_by_logo from '../assets/PoweredBy.svg'

const DisplayData = () => {
    const location = useLocation()
    const { data } = location.state
    // console.log('Data has arrived', data);
    return (
        <div className='bg-[#AED8FF] w-screen h-screen pt-10 overflow-auto px-6 border '>
            {/* Reuploading file system */}
            <Upload />

            <div className='flex justify-center flex-initial mt-[50px] gap-x-7'>
                {/* Crafted Leads */}
                <div >
                    <h3 className='text-xl font-semibold text-[#1E1D5B]'>Crafted Leads</h3>
                    <CraftedLeads data={data} />
                </div>

                {/* Graphs */}
                <div className='w-[650px] h-[200px]'>
                    <h3 className='text-xl font-semibold text-[#1E1D5B]'>Graphs</h3>
                    <Graphs data={data} />
                </div>

            </div>
            <div className='flex justify-center mt-5'>
                <img src={powered_by_logo} alt="powered_by_logo" className='w-[200px]' />
            </div>




        </div>
    )
}

export default DisplayData