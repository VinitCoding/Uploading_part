import React, { useEffect, useState } from 'react'
import lead_img from '../assets/lead_img.svg'
import { IoIosArrowBack } from "react-icons/io";

const CraftedLeads = ({ data }) => {
  // console.log(data);
  let bg_colors = ['#CBF4FF', '#DDFBF4', '#FFEACF', '#FFFAE1']

  // State for displaying the data
  const [showPanel, setShowPanel] = useState(false)

  // State for handling data
  const [showData, setShowData] = useState({})

  // State for handling lead
  const [leadNumber, setLeadNumber] = useState('')

  const handleClick = (number) => {
    setShowPanel(true)
    setLeadNumber(number)
    setShowData(data.data[number]);
  }

  // HandleBack function
  const handleBack = () => {
    setShowPanel(false)
  }

  // console.log('Data to be send to showData component', showData);
  // console.log('Lead Number is ', leadNumber);
  return (
    <section className='bg-white max-h-[500px] overflow-y-scroll min-h-[200px] w-[600px] min-w-fit py-4 rounded-lg shadow-md mt-3 grid grid-cols-3 px-2 place-items-center gap-x-4 '>
        {
          showPanel ? (
            <div className='w-full col-span-3 text-[#1E1D5B] pb-2'>
              <div className='flex gap-x-3 pl-3 bg-[#DDFBF4] py-3 rounded-md mt-3 mx-3 '>
                <button onClick={handleBack}><IoIosArrowBack className='text-[20px] font-semibold' /></button>
                <h2 className='text-[20px] font-medium'>Lead {leadNumber + 1}</h2>
              </div>
              <ul className='bg-[#DDFBF4] mt-3 mx-3 py-3 px-2 rounded-lg'>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Age Category: </span> {showData.Age_Category}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Location: </span>{showData.Location}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Annual Income: </span>{showData.Annual_Income}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Bank Details Proof: </span>{showData.Bank_Details_Proof}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Age Category: </span>{showData.Age_Category}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Occupation: </span>{showData.Occupation}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Primary Source: </span>{showData.Primary_Source}</li>
                <li className='px-1 py-2 text-[18px]'><span className='font-semibold'>Residential Status: </span>{showData.Residential_Status}</li>
              </ul>
            </div>
          ) : (data && data.n_rows && data.n_rows.map((item, index) => (
            <div key={index} className={`p-2 mt-2 mb-2 text-center rounded-lg cursor-pointer`} style={{
              backgroundColor: bg_colors[index % bg_colors.length]
            }} onClick={() => handleClick(index)}>
              <img src={lead_img} alt="lead_image" />
              <p >Lead {item}</p>
            </div>
          )))
        }
    </section>
  )
}

export default CraftedLeads