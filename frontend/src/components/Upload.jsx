import React, { useContext, useRef, useState } from 'react'
import img from '../assets/analyze_img.svg'
import { CiCircleRemove } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Upload = () => {
    const inputRef = useRef()

    // File handling state
    const [selectedFile, setSelectedfile] = useState(null)

    // error handling State
    const [message, setMessage] = useState('')

    // Data handling state
    const [data, setData] = useState({})

    // Button enabled or disabled state
    const [isDisabled, setIsDisabled] = useState(false)

    // handleChange function
    const handleChange = (e) => {
        const fileSelected = e.target.files[0]
        if (fileSelected) {
            var fileType = fileSelected.name.split('.').pop().toLowerCase()
            if (fileType === 'xls' || fileType === 'csv' || fileType === 'xlsx') {
                setData({})
                setSelectedfile(fileSelected)
                console.log('Selected file Name:- ', fileSelected);
                setMessage('')
            }
            else {
                setSelectedfile(null)
                setMessage('Please upload an excel file (.xls, .csv or .xlsx)')
                setIsDisabled(false)
            }
        }
    }

    // handleClick function
    const handleClick = () => {
        inputRef.current.click()
    }

    // handleAnalyze function
    const handleAnalyze = async () => {
        if (!selectedFile) return
        setIsDisabled(true)
        const formData = new FormData()
        formData.append('file', selectedFile)

        const toastId = toast.loading('Uploading files...')

        try {
            const response = await axios.post('http://127.0.0.1:8000/qualify_leads', formData, {
                onUploadProgress: () => {
                    toast.loading('Calulating Data...', { id: toastId })
                }
            })
            setIsDisabled(false)
            setData(response.data.output_data)
            console.log(response);
            setTimeout(() => {
                toast.success('Data fetched Successfully..', {
                    id: toastId,
                    duration: 2000
                })
            }, 2000)
            if (response) {
            }
        } catch (error) {
            console.log('Error while calculating data', error);
            toast.error('Error while calculation..', {
                id: toastId,
                duration: 2000
            })
            setIsDisabled(true)
        }
    }

    // console.log('Updated files data', data);

    // deleteFile function
    const deleteFile = () => {
        inputRef.current.value = ""
        setSelectedfile(null)
    }

    return (
        <section className='pt-4 pb-6'>
            <Toaster />
            <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={handleChange} />
            <h3 className='text-[22px] font-bold text-[#1E1D5B]'>LEAD CRAFTER - Analyze your Leads!</h3>

            <div className='flex justify-between p-6 mx-auto mt-8 bg-white rounded-lg shadow-md w-fit gap-x-20'>
                {/* Display the data */}
                <div className='flex flex-col justify-center mb-6'>
                    <h3 className='text-lg text-[#1E1D5B] font-semibold'>We help you analyze your leads better</h3>
                    <p className='mt-3 text-[#2e2c89]'>Our goal is to carve out the best leads from your humongous data!</p>
                    {
                        selectedFile && (
                            // File name displayed
                            <div className='flex items-center justify-center gap-x-6'>
                                <p className='mt-3 text-base text-green-700'><span className='font-semibold'>File Name:-</span> {selectedFile.name} </p>
                                <button onClick={deleteFile} className='mt-2.5 text-2xl font-bold'><CiCircleRemove className='text-red-500' title='Remove the file' /></button>
                            </div>
                        )
                    }
                    {
                        !selectedFile || !isDisabled && (
                            <p className='mt-2 text-center text-red-500'>{message}</p>
                        )
                    }
                    <div className='flex justify-center gap-x-20'>
                        <button disabled={isDisabled} className={`bg-[#1E1D5B] text-white px-4 py-2 rounded-md mt-5 w-fit ${!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-20'} `} onClick={handleClick}>Upload File</button>
                        <button className='bg-[#1E1D5B] text-white px-4 py-2 rounded-md mt-5 w-fit ' onClick={handleAnalyze}>Analyze</button>
                    </div>


                </div>

                {/* Image Display */}
                <img src={img} alt="analyze_image" />

            </div>
        </section>
    )
}

export default Upload