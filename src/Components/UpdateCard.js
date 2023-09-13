import React from 'react'
import temp from '../assets/chhavi.jpg'

export default function UpdateCard({ image, description, link }) {
    return (
        <div className='md:h-inherit h-96 relative rounded-lg overflow-hidden shadow-lg flex flex-col gap-3 w-full'>
            <img className="w-full md:h-2/3 h-3/4" src={image} alt="Sunset in the mountains" />
            <div className='md:px-6 px-2'>

                <h5 className='md:text-sm text-xs text-center'>{description}</h5>
                <div className="mt-4 flex space-x-3 lg:mt-5 justify-center">
                    <a href={link} target="_blank" rel='noreferrer'>
                        <button
                            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Register
                        </button>
                    </a>
                    <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}
