import React from 'react'
import temp from '../assets/aasha-banner Large.jpeg'
import temp2 from '../assets/aasha2.png'

export default function OurWork() {
    return (
        <div className='md:block hidden'>
            <div className='flex flex-col items-center justify-center mb-7'>
                <h1 className='text-5xl'>Our Work</h1>
                <hr className='text-center w-1/4 border-2 border-black mt-2' />
            </div>
            <div className='relative flex items-center justify-between h-700'>
                <div className='h-inherit flex flex-col justify-around items-center w-1/4 px-8'>
                    <div>
                        <h3 className='text-blue-800 text-base font-bold text-center'>Book Donation</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                    <div>
                        <h3 className='text-base font-bold text-center text-blue-800'>Plantation Drive</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                    {/* <div>
                        <h3 className='text-base font-bold text-center'>Blood Donation</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div> */}
                    <div>
                        <h3 className='text-base font-bold text-center text-blue-800'>Voter awarness</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                </div>

                <div className='h-inherit relative rounded-lg overflow-hidden shadow-lg flex flex-col w-3/5 gap-1'>
                    <img className="w-full h-1/2" src={temp} alt="Sunset in the mountains" />
                    <div>
                        <h1 className='text-center text-xl font-bold p-2 text-blue-800'>"The best way to find yourself is to lose yourself in the service of others"</h1>
                        {/* <h1 className='text-center text-xl font-bold'>SOME HEAVY TEXT</h1> */}
                    </div>
                    <div className="p-4 flex gap-4 h-2/5">

                        <div className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <img className="rounded-t-lg w-full h-1/3" src={temp2} alt="" />
                            <div className="p-2">
                                <div>
                                    <h5 className="p-1 font-bold tracking-tight text-gray-900 dark:text-white">10K+ yoga participation</h5>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md ">
                            <img className="rounded-t-lg w-full h-1/3" src={temp2} alt="" />

                            <div className="p-2">
                                <div>
                                    <h5 className="p-1 font-bold tracking-tight text-gray-900 ">Voter awareness Program</h5>
                                </div>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <img className="rounded-t-lg w-full h-1/3" src={temp2} alt="" />

                            <div className="p-2">
                                <div>
                                    <h5 className="p-1 font-bold tracking-tight text-gray-900">Nurturing Young Students through Project Aasha</h5>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 text-sm">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='h-inherit flex flex-col justify-around items-center w-1/4 px-8'>
                    <div>
                        <h3 className='text-base font-bold text-center text-blue-800'>Cleanliness Drive</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                    <div>
                        <h3 className='text-base font-bold text-center text-blue-800'>Food Distribution</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                    <div>
                        <h3 className='text-base font-bold text-center text-blue-800'>Collection Drive</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                    {/* <div>
                        <h3 className='text-base font-bold text-center'>Book Donation</h3>
                        <span className='text-xs text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
