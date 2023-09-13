import React from 'react'
import { Carousel } from 'flowbite-react'
import temp from '../../assets/chhavi.jpg'

export default function TestiSlider() {
    return (
        <div>
            <div className='md:block hidden h-550 w-full m-auto bg-gray-700 p-12 cursor-default'>
                <Carousel slide={false} indicators={false}>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit px-12'>

                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>

                        </div>
                    </div>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit px-12'>

                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>

                        </div>
                    </div>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit px-12'>

                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>Dogs. NSUT</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>

                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='md:hidden h-80 w-full m-auto bg-gray-700 md:p-12 px-2 py-10 cursor-default'>
                <Carousel slide={false} indicators={false}>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit md:px-12 px-3'>

                            <div className='bg-gray-100 rounded-2xl md:p-6 px-8 py-3'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            {/* <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit md:px-12 px-3'>

                            <div className='bg-gray-100 rounded-2xl md:p-6 px-8 py-3'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            {/* <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit md:px-12 px-3'>

                            <div className='bg-gray-100 rounded-2xl md:p-6 px-8 py-3'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            {/* <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div> */}

                        </div>
                    </div>
                    <div className='-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 h-full cursor-default'>
                        <div className='flex gap-6 h-inherit md:px-12 px-3'>

                            <div className='bg-gray-100 rounded-2xl md:p-6 px-8 py-3'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div>
                            {/* <div className='bg-gray-100 rounded-2xl p-6'>
                                <img src={temp} alt="" className='w-1/2 h-2/5 rounded-full content-center mx-auto my-3' />
                                <h4 className='text-center'>NIC CAMP</h4>
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi molestias accusantium cum repudiandae non sint sed quam, dolor dolorum eos voluptate aperiam accusamus ipsam laboriosam reiciendis similique reprehenderit sit ducimus? Tempore, eveniet maiores.</p>
                            </div> */}

                        </div>
                    </div>
                    
                </Carousel>
            </div>
        </div>
    )
}
