import React from 'react'
import Upload from '../components/Upload'
import CraftedLeads from '../components/CraftedLeads'

const DisplayData = () => {
  return (
    <div className='bg-[#AED8FF] w-full h-full px-6 border'>
        <Upload />

        <div className='flex justify-between flex-initial mt-12'>
            {/* Crafted Leads */}
            <div className='bg-white w-[600px] h-[200px]'>
                <h3>Crafted Leads</h3>
                <CraftedLeads />
            </div>

            {/* Graphs */}
            <div className='bg-white w-[600px] h-[200px]'>
                <h3>Graphs</h3>
            </div>
        </div>
    </div>
  )
}

export default DisplayData