import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import React, { useState } from 'react'

const Graphs = ({ data }) => {
    console.log('Data came to graphs', data.image_list);

    const [openModal, setOpenModal] = useState(false)

    const [showdata, setShowData] = useState({})

    const handleModal = (number) => {
        setOpenModal(!openModal)
        setShowData(data.image_list[number])
    }

    const onClose = () => setOpenModal(!openModal)
    return (
        <section className='grid grid-cols-2 mt-3.5 gap-6 '>

            {
                data.image_list.map((item, index) => (
                    <div className='p-1 bg-white rounded-md shadow-md w-fit h-fit' key={index} onClick={() => handleModal(index)}>
                        <img src={`data:image/png;base64,${item}`} alt="graphs" />
                    </div>
                ))
            }
            {
                openModal ? (
                    <Dialog open={openModal} handler={onClose} className='border-none'>
                        <DialogBody>
                            <img src={`data:image/png;base64,${showdata}`} alt="image" />
                        </DialogBody>
                    </Dialog>
                ) : (null)
            }
        </section>
    )
}


export default Graphs