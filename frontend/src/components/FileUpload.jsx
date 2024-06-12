import React, { useEffect, useRef, useState } from 'react'
import cloud_upload from '../assets/upload_to_cloud.svg'
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
    const inputRef = useRef()
    const navigate = useNavigate()

    // State variables for tracking file status
    const [selectedFile, setSelectedFile] = useState(null)
    const [progress, setProgress] = useState(100);
    const [message, setMessage] = useState('')

    // HandleChange function
    const handleChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            const fileType = selectedFile.name.split('.').pop().toLowerCase()

            if (fileType === 'xls' || fileType === 'csv' || fileType === 'xlsx') {
                setSelectedFile(selectedFile)
                console.log(selectedFile);
                setMessage('')
            } else {
                setSelectedFile(null)
                setMessage('Please upload an excel file (.xls, .csv or .xlsx)')
            }
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
    }

    // handleUpload Function
    const handleUpload = async () => {
        if (!selectedFile) return
        let formData = new FormData()
        formData.append('file', selectedFile)
        const toastId = toast.loading('Uploading File...', {
            duration: 4000
        })
        try {
            const response = await axios.post('http://127.0.0.1:8000/qualify_leads', formData, {
                onUploadProgress: (progressEvent) => {
                    const { load, total } = progressEvent
                    const progressValue = Math.round((load * 100) / total)
                    setProgress(progressValue)
                    toast.loading(`Calculating data....`, {
                        id: toastId,
                    })
                },
            },
            )
            console.log(response.data);
            setTimeout(() => {
                toast.success('Data fetched successfully', {
                    id: toastId,
                    duration: 2000
                })
                setTimeout(() => {
                    navigate('/display_data')
                }, 2000)
            }, 2000)
            // inputRef.current.value = ""
            // setSelectedFile(null)
            // setProgress(0)

        } catch (error) {
            console.log('Error while uploading', error);
            toast.error('Error while Uploading file', {
                id: toastId,
                duration: 2000
            })
        }
    }



    return (
        <div className={`bg-white max-h-[450px] min-h-[100px]  w-[650px] rounded-md text-center flex flex-col items-center shadow-md mt-3 pb-10`}>
            <Toaster />
            <h2 className='mt-5 text-[35px] font-semibold text-[#26252D]'>Upload File</h2>
            <input ref={inputRef} type="file" onChange={handleChange} style={{ display: 'none' }} />

            {/* Button to trigger the file input dialog */}
            {
                (!selectedFile) && (
                    <>
                        <div className='bg-[#F8F7F7] mt-4 px-36 pb-16 pt-8 border-[2px] border-blue-400 border-dashed rounded-md text-center cursor-pointer' onClick={handleClick}>
                            <img src={cloud_upload} alt="cloud_image " className='mx-auto' />
                            <h4 className='text-[22px] font-semibold text-[#175195]'>Click to Upload File</h4>
                            <p className='text-[#3C3C3C] text-[15px] font-semibold mt-3'>Supported File Formats: <span className='text-[#989898] '>.xls, .csv, .xlsx</span></p>

                        </div>
                        <p className='pb-3 mt-1 text-base text-red-500'>{message}</p>
                    </>)
            }

            {/* Showing info about the file */}
            {
                (selectedFile) && (<div className='mb-10'>
                    <div className='flex  overflow-y-auto justify-center items-center px-5 py-3 rounded-lg gap-x-5 bg-[#F8F7F7] mt-5'>
                        <FaFileAlt className='text-[#3884c2] text-xl' />
                        {/* File Name */}
                        <div className='flex flex-col items-center justify-center gap-x-1'>
                            <h3 className='text-[13px]'>{selectedFile.name}</h3>
                        </div>
                        <button onClick={clearSelected} className='rounded-full bg-[#d0e2fe] p-2 text-center'><IoMdClose className='text-[#3378b0]' /></button>

                    </div>
                    <button className='px-3 py-2 mt-10 font-normal text-white bg-blue-500 rounded' onClick={handleUpload}>Upload</button>
                </div>

                )
            }
            
        </div>
    )
}

export default FileUpload