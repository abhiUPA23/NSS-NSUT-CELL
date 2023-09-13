import React from 'react'
import temp from '../assets/chhavi.jpg'


export default function Projects() {
    return (
        <div className='grid gap-16 my-10'>
            <div className='w-3/4 m-auto h-80'>
                <div className='grid grid-cols-2 gap-16 w-full items-center justify-center'>
                    <div className=''>
                        <h1 className='text-3xl'>Udbhav: Shiksha ki Nayi Umang</h1>
                        <hr className='w-1/6 border-2 border-blue-500 border-solid' />
                        <div className='w-full h-14'></div>
                        <p className='text-lg'>Under this initiative, NSS aimed to emphasize the importance of extracurricular activities in a students life and provided academic education in a more interactive way, especially to rural and underprivileged children. This initiative started with CBRI Government School in February 2019 and has now</p>
                    </div>
                    <div className='flex justify-center'>

                        <img src={temp} alt="" className='max-h-full rounded-3xl w-96 h-80' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-16'>
                <div className='h-80 w-4/5 m-auto flex items-center justify-evenly'>
                    <img src={temp} alt="" className='w-full h-full rounded-3xl' />
                    <div className='p-20 border-blue-500'>
                        <h1 className='text-3xl'>Udbhav: Shiksha ki Nayi Umang</h1>
                        <hr className='w-1/6 border-2 border-blue-500' />
                        <div className='w-full h-14'></div>
                        <p className='text-lg'>Under this initiative, NSS Roorkee aimed to emphasize the importance of extracurricular activities in a students life and provided academic education in a more interactive way, especially to rural and underprivileged children. This initiative started with CBRI Government School in February 2019 and has now</p>
                    </div>
                </div>
                <div className='h-80 w-4/5 m-auto flex items-center justify-evenly'>
                    <img src={temp} alt="" className='w-full h-full rounded-3xl' />
                    <div className='p-20 border-blue-500'>
                        <h1 className='text-3xl'>Udbhav: Shiksha ki Nayi Umang</h1>
                        <hr className='w-1/6 border-2 border-blue-500' />
                        <div className='w-full h-14'></div>
                        <p className='text-lg'>Under this initiative, NSS Roorkee aimed to emphasize the importance of extracurricular activities in a students life and provided academic education in a more interactive way, especially to rural and underprivileged children. This initiative started with CBRI Government School in February 2019 and has now</p>
                    </div>
                </div>
                <div className='h-80 w-4/5 m-auto flex items-center justify-evenly'>
                    <img src={temp} alt="" className='w-full h-full rounded-3xl' />
                    <div className='p-20 border-blue-500'>
                        <h1 className='text-3xl'>Udbhav: Shiksha ki Nayi Umang</h1>
                        <hr className='w-1/6 border-2 border-blue-500' />
                        <div className='w-full h-14'></div>
                        <p className='text-lg'>Under this initiative, NSS Roorkee aimed to emphasize the importance of extracurricular activities in a students life and provided academic education in a more interactive way, especially to rural and underprivileged children. This initiative started with CBRI Government School in February 2019 and has now</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
