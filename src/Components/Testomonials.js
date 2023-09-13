import React from 'react'
import TestiSlider from './Sliders/TestiSlider'


export default function Testomonials() {
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center justify-center mb-7'>
                <h1 className='md:text-5xl text-2xl'>Testimonials</h1>
                <hr className='text-center w-1/3 border-2 border-black mt-2' />
            </div>
            <TestiSlider />
        </div>
    )
}
