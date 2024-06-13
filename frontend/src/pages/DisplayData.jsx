import React from 'react'
import Upload from '../components/Upload'
import CraftedLeads from '../components/CraftedLeads'
import { useLocation } from 'react-router-dom'

const DisplayData = () => {
    const location = useLocation()
    const {data} = location.state
    // console.log('Data has arrived' ,data);
  return (
    <div className='bg-[#AED8FF] w-screen h-screen overflow-auto px-6 border pb-10'>
        <Upload />

        <div className='flex justify-between flex-initial mt-12'>
            {/* Crafted Leads */}
            <div >
                <h3 className='text-lg font-semibold text-[#1E1D5B]'>Crafted Leads</h3>
                <CraftedLeads data={data}/>
            </div>

            {/* Graphs */}
            {/* <div className='bg-white w-[600px] h-[200px]'>
                <h3>Graphs</h3>
            </div> */}
        </div>
    </div>
  )
}

export default DisplayData