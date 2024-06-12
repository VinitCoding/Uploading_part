import React from 'react'

const CraftedLeads = ({data}) => {    
  return (
    <section className='bg-white w-[600px] h-[200px]'>
        <p>
            {data.n_rows}
        </p>
    </section>
  )
}

export default CraftedLeads