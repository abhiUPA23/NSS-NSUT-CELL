import React from 'react'
import temp from '../assets/group.JPEG'
import { Carousel } from 'flowbite-react'

export default function EventsTab({ title, subtitle, imgs, description }) {
    return (
        <div className='md:h-auto h-fit'>
            <div className='py-3 bg-gray-200 md:rounded-2xl rounded-lg'>
                <div className='mb-3 md:px-0 px-3'>

                    <h1 className='text-center'>{title}</h1>
                    <p className='text-center'>{subtitle}</p>
                </div>
                <div className="md:h-350 h-32 md:mx-6 px-4">
                    <Carousel className='m-8' slide={false}>
                        {
                            imgs.map((object, i) => {
                                return (<img src={object} key={i} className='h-inherit w-auto' alt="..." />)
                            })
                        }
                        {/* <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' /> */}
                    </Carousel>
                </div>
                <p className='text-center md:py-8 md:px-0 px-2 py-3'>{description}</p>
            </div>
        </div>
    )
}
