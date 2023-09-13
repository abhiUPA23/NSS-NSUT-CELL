import React from 'react'

export default function EventTabHome({ title, description, imgSrc, bg }) {
    // const img = "bg-" + imgSrc;
    // const background = "bg-" + color + "-" + bold + "/70";
    return (
        <div className={`relative ${imgSrc} h-full bg-cover bg-center bg-no-repeat`}>
            <div className={`${bg} cursor-pointer w-full h-350 hover:bg-transparent hover:opacity-0 transition-all duration-300`}>
                <div className='absolute w-full flex flex-col items-center justify-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h3 className='md:text-4xl text-xl sm:text-lg uppercase text-center'>{`${title}`}</h3>
                    <hr className='w-2/3 border-1 border-white-500' />
                    <h3 className='md:text-xl text-base sm:text-sm uppercase'>{`${description}`}</h3>
                </div>
            </div>
        </div>

    )
}
