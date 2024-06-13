import React, { useState } from 'react'
import lead_img from '../assets/lead_img.svg'
import ShowData from './ShowData'

const CraftedLeads = ({ data }) => {
  let bg_colors = ['#CBF4FF', '#DDFBF4', '#FFEACF', '#FFFAE1']

  // State for displaying the data
  const [showData, isShowData] = useState(false)

  const handleClick = () => {
    isShowData(true)
  }
  return (
    <section className='bg-white w-[600px] max-h-max min-h-[200px] grid grid-cols-3 place-items-center py-3 rounded-lg shadow-md mt-3'>
      {
        showData ? (<ShowData />) : (data.n_rows.map((item, index) => (
          <div key={index} className={`p-2 mt-2 mb-2 text-center rounded-lg`} style={{
            backgroundColor: bg_colors[index % bg_colors.length]
          }} onClick={handleClick}>
            <img src={lead_img} alt="lead_image" />
            <p >Lead {item}</p>
          </div>
        )))
      }
    </section>
  )
}

export default CraftedLeads