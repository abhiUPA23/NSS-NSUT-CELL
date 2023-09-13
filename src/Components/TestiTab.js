import React from 'react'
import abhi from '../assets/abhi.jpg'

export default function TestiTab() {
    return (
        <div className='bg-gray-300/20 text-black p-6 rounded-2xl'>
            <img src={abhi} className='w-1/2 h-auto rounded-full content-center m-auto p-2' alt="..." />
            <h2 className='text-center text-2xl p-2'>V.C NSUT</h2>
            <p className='text-justify text-lg'>
                I take this opportunity to reiterate that the true spirit of NSS lies in the vision
                of Mahatma Gandhi that the best way to find yourself is to lose yourself in the service of others. Building a successful social initiative calls for collective commitment, dedication, high sense of responsibility, and service-oriented mindset from all its stakeholders. This is how the vision and mission of our NSS NSUT cell can be achieved in letter and spirit. As the head of this prospering University, I have the moral, ethical, professional responsibility and commitment to continue to
                strive for the best work and motivate my students to grow.
            </p>

        </div>
    )
}
