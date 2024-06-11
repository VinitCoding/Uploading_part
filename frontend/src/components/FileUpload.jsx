import React, { useRef, useState } from 'react'
import cloud_upload from '../assets/upload_to_cloud.svg'
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

const FileUpload = () => {
    const inputRef = useRef()

    // State variables for tracking file status
    const [selectedFile, setSelectedFile] = useState(null)
    const [progress, setProgress] = useState(100);
    const [fileStatus, setFileStatus] = useState('selected') // setting the file according to file status ['selected'/'uploading'/'done']

    // HandleChange function
    const handleChange = (e) => {
        if (e.target.files && e.target.files.length) {
            setSelectedFile(e.target.files[0])
        }
    }

    // HandleClick Function
    const handleClick = () => {
        inputRef.current.click()
    }

    // clearSelected function
    const clearSelected = () => {
        inputRef.current.value = ""
        setSelectedFile(null)
        setProgress(0)
        setFileStatus('selected')
    }

    // handleUpload Function
    const handleUpload = async() => {
        if(fileStatus === 'done'){
            clearSelected()
            return
        }
        try {
            // Uploading Status
            setFileStatus('uploading')

            const response = await axios.post('http://localhost:5173/api/upload', {
                onUploadProgress: (progressEvent) => {
                    const progressCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    )

                    setProgress(progressCompleted)
                }
            })

            setFileStatus('Done')
        } catch (error) {
            console.log('Error while uploading', error);
        }
    }



    return (
        <div className={`bg-white max-h-[450px] min-h-fit  w-[650px] rounded-md text-center flex flex-col items-center shadow-md mt-3 pb-10`}>
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
                selectedFile && (<div className='mb-10'>
                    <div className='flex  overflow-y-auto justify-center items-center px-5 py-3 rounded-lg gap-x-5 bg-[#F8F7F7] mt-5'>
                        <FaFileAlt className='text-[#3884c2] text-xl' />
                        {/* File Name */}
                        <div className='flex flex-col items-center justify-center gap-x-1'>
                            <h3 className='text-[13px]'>{selectedFile.name}</h3>
                            <div className='w-full h-[5px] bg-[rgba(0,0,0,0.076)] rounded-[8px] mt-1'>
                                <div className='w-0 h-[5px] bg-[#3691dc] rounded-[8px] ' style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        <button onClick={clearSelected} className='rounded-full bg-[#d0e2fe] p-2 text-center'><IoMdClose className='text-[#3378b0]'/></button>

                    </div>
                    <button className='px-3 py-2 mt-6 font-normal text-white bg-blue-500 rounded' onClick={handleUpload}>Upload</button>
                </div>

                )
            }
        </div>
    )
}

export default FileUpload