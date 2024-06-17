import React, { useRef, useState } from 'react'
import bg_img from '../assets/upload_img.svg'
import FileUpload from '../components/FileUpload'

const Home = () => {
  return (
    <>
    <section className='flex items-center justify-center w-full h-full py-8 gap-x-9'>
        <img src={bg_img} alt="image" />

        <div>
            <FileUpload />
        </div>
    </section>
    </>
  )
}

export default Home