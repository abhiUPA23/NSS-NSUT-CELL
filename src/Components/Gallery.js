import React from 'react'
import { Carousel } from 'flowbite-react'
import temp from '../assets/chhavi.jpg'

export default function Gallery() {
    return (
        <div className='mt-10'>
            <div className="lg:block h-64 hidden cursor-default">
                <Carousel slide={false} indicators={false}>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                </Carousel>
            </div>
            <div className="md:block h-64 lg:hidden hidden cursor-default">
                <Carousel slide={false} indicators={false}>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-24 cursor-auto h-full items-center'>
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-52 h-52 cursor-pointer rounded-2xl' />
                    </div>
                </Carousel>
            </div>
            <div className="h-64 md:hidden cursor-default">
                <Carousel slide={false} indicators={false}>
                    <div className='flex gap-7 px-20 cursor-auto h-full items-center justify-center'>
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-20 cursor-auto h-full items-center justify-center'>
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-20 cursor-auto h-full items-center justify-center'>
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-20 cursor-auto h-full items-center justify-center'>
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                    </div>
                    <div className='flex gap-7 px-20 cursor-auto h-full items-center justify-center'>
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                        <img src={temp} alt="" className='w-44 h-44 cursor-pointer rounded-2xl' />
                    </div>
                </Carousel>
            </div>

        </div>
    )
}
