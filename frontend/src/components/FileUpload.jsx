import React, { useRef, useState } from 'react'
import cloud_upload from '../assets/upload_to_cloud.svg'
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const FileUpload = () => {
    const inputRef = useRef()
    const navigate = useNavigate()

    // State state for handling file
    const [selectedFile, setSelectedFile] = useState(null)

    // State state for messging 
    const [message, setMessage] = useState('')

    // Setting state for data handling
    const [data, setData] = useState({})
    // let data = {};
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
            const response = await axios.post('http://127.0.0.1:8008/qualify_leads', formData, {
                onUploadProgress: () => {
                    toast.loading(`Calculating data....`, {
                        id: toastId,
                    })
                },
            },
            )

            setData(response.data.output_data)
            setTimeout(() => {
                toast.success('Data fetched successfully', {
                    id: toastId,
                    duration: 2000
                })
                setTimeout(() => {
                    if(data){
                        navigate('/display_data', {state: {data: response.data.output_data}})
                    }else{
                        navigate('/')
                    }
                }, 2000)
            }, 2000)

        } catch (error) {
            console.log('Error while uploading', error);
            toast.error('Error while Uploading file', {
                id: toastId,
                duration: 2000
            })
        }
    }

    return (
        <div className={`bg-white max-h-[450px] min-h-[100px] w-[650px] rounded-md text-center flex flex-col items-center shadow-md pb-10 mt-8`}>
            <Toaster />
            <h2 className='mt-3 text-[35px] font-semibold text-[#26252D]'>{
                selectedFile ? 'Analyze File' : 'Upload File' 
                }</h2>

                <hr className='text-[#000000] w-full border-[1px] mt-2'/>
            <input ref={inputRef} type="file" onChange={handleChange} style={{ display: 'none' }} />

            {
                selectedFile && (
                    <div className='mt-6 text-left'>
                        <h2 className='font-semibold text-xl text-[#1E1D5B]'>We help you analyze your leads better</h2>
                        <p className='mt-3'>Our goal is to carve out the best leads from your humongous data!</p>
                    </div>
                )
            }

            {/* Button to trigger the file input dialog */}
            {
                (!selectedFile) && (
                    <>
                        <div className='bg-[#F8F7F7] mt-5 px-36 pb-16 pt-8 border-[2px] border-blue-400 border-dashed rounded-md text-center cursor-pointer' onClick={handleClick}>
                            <img src={cloud_upload} alt="cloud_image " className='mx-auto' />
                            <h4 className='text-[22px] font-semibold text-[#175195]'>Click to Upload File</h4>
                            <p className='text-[#3C3C3C] text-[15px] font-semibold mt-3'>Supported File Formats: <span className='text-[#989898] '>.xls, .csv, .xlsx</span></p>

                        </div>
                        <p className='pb-3 mt-1 text-base text-red-500'>{message}</p>
                    </>)
            }

            {/* Showing info about the file */}
            {
                (selectedFile) && (<div className='mb-8'>
                    <div className='flex  overflow-y-auto justify-center items-center px-5 py-3 rounded-lg gap-x-5 bg-[#F8F7F7] mt-6'>
                        <FaFileAlt className='text-[#3884c2] text-xl' />
                        {/* File Name */}
                        <div className='flex flex-col items-center justify-center gap-x-1'>
                            <h3 className='text-[13px]'>{selectedFile.name}</h3>
                        </div>
                        <button onClick={clearSelected} className='rounded-full bg-[#d0e2fe] p-2 text-center'><IoMdClose className='text-[#3378b0]' /></button>

                    </div>
                    <button className='px-3 py-2 mt-6 font-normal text-white bg-blue-500 rounded' onClick={handleUpload}>Analyze</button>

                </div>

                )
            }

            {
                data && (
                    <Link to={{
                        pathname: '/display_data', data: {
                            data
                        }
                    }}></Link>
                )
            }

        </div>
    )
}

export default FileUpload