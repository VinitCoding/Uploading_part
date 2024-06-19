import { Dialog, DialogBody, DialogHeader, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Graphs = ({ data }) => {
    // console.log('Data came to graphs', data.image_list);

    const [openModal, setOpenModal] = useState(false)

    const [showdata, setShowData] = useState({})

    const handleModal = (number) => {
        setOpenModal(!openModal)
        if (data?.image_list) setShowData(data.image_list[number])
    }

    const onClose = () => setOpenModal(!openModal)
    return (
        <section className='grid grid-cols-2 mt-3.5 gap-6 '>

            {
                data.image_list && data.image_list.map((item, index) => (
                    <div className='p-1 bg-white rounded-md shadow-md w-fit h-fit cursor-pointer' key={index} onClick={() => handleModal(index)}>
                        <img src={`data:image/png;base64,${item}`} alt="graphs" />
                    </div>
                ))
            }
            {
                openModal ? (
                    <div className='flex'>
                        <Dialog open={openModal} handler={onClose} className='flex flex-col items-end'>
                            <DialogHeader className='relative flex justify-start w-full'>
                                <h2 className='absolute top-2'>Graph 1</h2>
                                <IoMdClose onClick={onClose} title='Close' className='absolute right-6 top-3 mb-2 hover:bg-red-500 hover:text-white transition-all duration-75 ease-in-out rounded-md cursor-pointer' />
                            </DialogHeader>
                            <DialogBody>
                                <hr className='text-[#000000] w-full border-[1px] mb-2'/>
                                <img src={`data:image/png;base64,${showdata}`} alt="image" />
                            </DialogBody>
                        </Dialog>

                    </div>

                ) : (null)
            }
        </section>
    )
}


export default Graphs