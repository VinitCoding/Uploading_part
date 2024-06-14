import React from 'react'

const Graphs = ({ data }) => {
    console.log('Data came to graphs', data.image_list);

    const openModel = (number) => {
        console.log(`hii ${number}`);
    }

    return (
        <section className='grid grid-cols-2 mt-3.5 gap-6'>

            {
                data.image_list.map((item, index) => (
                    <div className='p-1 bg-white rounded-md shadow-md w-fit h-fit' key={index} onClick={() => openModel(index)}>
                        <img src={`data:image/png;base64,${item}`} alt="graphs" />
                    </div>
                ))
            }
        </section>
    )
}


export default Graphs