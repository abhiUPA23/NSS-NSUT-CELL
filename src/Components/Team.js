import React from 'react'
import temp from '../assets/chhavi.jpg'

export default function Team() {
    return (
        <div className='my-6'>
            <div>
                <div className="w-5/6 m-auto flex gap-6 h-96">
                    <div className='h-inherit relative rounded-lg overflow-hidden shadow-lg flex flex-col gap-3 w-full'>
                        <img className="w-full h-2/3" src={temp} alt="Sunset in the mountains" />
                        <div className='px-6'>

                            <h5 className='text-sm text-center'>Lorem ipsum dolor ipsum dolor ipsum dolor sit amet consectetur.</h5>
                            <div className="mt-4 flex space-x-3 lg:mt-5 justify-center">
                                <button
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Register
                                </button>
                                <button
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='h-inherit relative rounded-lg overflow-hidden shadow-lg flex flex-col gap-3 w-full'>
                        <img className="w-full h-2/3" src={temp} alt="Sunset in the mountains" />
                        <div className='px-6'>

                            <h5 className='text-sm text-center'>Lorem ipsum dolor ipsum dolor ipsum dolor sit amet consectetur.</h5>
                            <div className="mt-4 flex space-x-3 lg:mt-5 justify-center">
                                <button
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Register
                                </button>
                                <button
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
