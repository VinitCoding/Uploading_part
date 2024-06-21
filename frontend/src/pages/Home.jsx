import React from 'react'
import bg_img from '../assets/bg_img_2.svg'
import FileUpload from '../components/FileUpload'
import powered_by_logo from '../assets/PoweredBy.svg'

const Home = () => {
  return (
    <>
    <section className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='flex items-center justify-center pb-0 pt-[70px] gap-x-24'>
        <img src={bg_img} alt="image" className='w-[550px]'/>

        <div>
            <FileUpload />
        </div>
      </div>

      <div className='pt-10'>
        <img src={powered_by_logo} alt="powered_by_logo" className=''/>
      </div>
    </section>
    </>
  )
}

export default Home