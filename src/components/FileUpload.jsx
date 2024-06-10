import React, { useRef, useState } from 'react'
import cloud_upload from '../assets/upload_to_cloud.svg'
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const FileUpload = () => {
    const inputRef = useRef()

    // State variables for tracking file status
    const [selectedFile, setSelectedFile] = useState(null)
    const [progress, setProgress] = useState(0);
    const [fileStatus, setFileStatus] = useState('selected') // setting the file according to file status ['selected'/'uploading'/'done']

    // HandleChange function
    const handleChange = (e) => {
        if (e.target.files && e.target.files.length) {
            setSelectedFile(e.target.files)
        }
    }

    // HandleClick Function
    const handleClick = () => {
        inputRef.current.click()
        // console.log(selectedFile);
    }

    return (
        <div className='bg-white h-[450px] w-[650px] rounded- text-center flex flex-col items-center shadow-md mt-3'>
            <h2 className='mt-5 text-[35px] font-semibold text-[#26252D]'>Upload File</h2>
            <input ref={inputRef} type="file" onChange={handleChange} style={{ display: 'none' }} />

            {/* Button to trigger the file input dialog */}
            {
                !selectedFile && (
                    <button className='bg-[#F8F7F7] mt-4 px-36 pb-16 pt-8 border-[2px] border-blue-400 border-dashed rounded-md text-center' onClick={handleClick}>
                        <img src={cloud_upload} alt="cloud_image " className='mx-auto' />
                        <h4 className='text-[22px] font-semibold text-[#175195]'>Click to Upload File</h4>
                        <p className='text-[#3C3C3C] text-[15px] font-semibold mt-3'>Supported File Formats: <span className='text-[#989898] '>.xls, .csv</span></p>
                    </button>)
            }

            {/* Showing info about the file */}
            {
                selectedFile && (<>
                <div className='flex justify-center items-center px-5 py-3 rounded-lg gap-x-4 bg-[#F8F7F7] mt-5'>
                    <FaFileAlt className='text-blue-700 text-lg' />
                    {/* File Name */}
                    <div className='flex justify-center items-center gap-x-1'>
                        <h5>File name here</h5>
                        <div>
                            <div className='bg-blue-500 ' style={{ width: '40%' }}></div>
                        </div>
                        <button onClick={() => { }}><IoMdClose /></button>
                    </div>
                </div>

                <button className=''>Upload</button>
                </>

                )
            }
        </div>
    )
}

export default FileUpload