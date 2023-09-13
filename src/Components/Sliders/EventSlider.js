import React from 'react'
import { Carousel } from 'flowbite-react'
import temp from '../../assets/group.JPEG'
import EventsTab from '../EventsTab'

export default function EventSlider() {
    const details = [
        {
            title: 'Adopted Village Survey',
            subtitle: 'General Survey in University adopted Villages, June 6, 2022',
            imgs: [temp, temp, temp],
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. ?'
        },
        {
            title: 'Adopted Village Survey',
            subtitle: 'General Survey in University adopted Villages, June 6, 2022',
            imgs: [temp, temp, temp],
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. '
        },
        {
            title: 'Adopted Village Survey',
            subtitle: 'General Survey in University adopted Villages, June 6, 2022',
            imgs: [temp, temp, temp],
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit.?'
        },
    ]
    return (
        <div className='h-fit w-full m-auto md:px-12 px-3 md:py-3 md:gap-8 gap-3 flex flex-col'>
            {
                details.map((object, i) => {
                    return (<EventsTab title={object.title} subtitle={object.subtitle} imgs={object.imgs} description={object.description} key={i} />)
                })
            }
            {/* <div className='py-3 bg-gray-200 rounded-2xl'>
                <h1 className='text-center'>Adopted Village Survey</h1>
                <p className='text-center'>General Survey in University adopted Villages, June 6, 2022</p>
                <div className="h-350 mx-6">
                    <Carousel className='m-8' slide={false}>
                        <img src={temp} alt="..." className='h-full w-full' />
                        <img src={temp} alt="..." className='h-full w-full' />
                        <img src={temp} alt="..." className='h-full w-full' />
                    </Carousel>
                </div>
                <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimnis in, soluta ut dignissimos ducimus reiciendis quisquam ullam illo?</p>
            </div>
            <div className='py-3 bg-gray-200 rounded-2xl'>
                <h1 className='text-center'>Adopted Village Survey</h1>
                <p className='text-center'>General Survey in University adopted Villages, June 6, 2022</p>
                <div className="h-350 mx-6">
                    <Carousel className='m-8' slide={false}>
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                    </Carousel>
                </div>
                <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimnis in, soluta ut dignissimos ducimus reiciendis quisquam ullam illo?</p>
            </div>
            <div className='py-3 bg-gray-200 rounded-2xl'>
                <h1 className='text-center'>Adopted Village Survey</h1>
                <p className='text-center'>General Survey in University adopted Villages, June 6, 2022</p>
                <div className="h-350 mx-6">
                    <Carousel className='m-8' slide={false}>
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                        <img src={temp} alt="..." className='h-inherit w-auto' />
                    </Carousel>
                </div>
                <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimus reicieum dolor sit amet consectetur adipisicing elit. Officia nam, quidem officiis repudiandae omnis in, soluta ut dignissimos ducimnis in, soluta ut dignissimos ducimus reiciendis quisquam ullam illo?</p>
            </div> */}

        </div>
    )
}
