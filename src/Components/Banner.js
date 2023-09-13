import React from 'react'

export default function Banner() {
    return (
        <div className="bg-nssbanner bg-cover md:h-550 h-96 bg-center w-full flex flex-col justify-end text-white font-poppins">
            <div className="bg-black/50 h-full flex flex-col justify-end items-center p-12 ">
                <h1 className='md:text-7xl text-3xl font-medium'>NSS NSUT CELL</h1>
                <hr className='md:w-1/2 w-3/5 border-2 border-white-500' />
                <h6 className='md:text-2xl text-xl'>NOT ME BUT YOU</h6>
            </div>

        </div>
    )
}
