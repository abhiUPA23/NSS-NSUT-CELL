import React from 'react'
import logo from '../assets/NSSLOGO.PNG'

export default function About() {
    return (
        <div className='md:p-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='md:text-5xl text-2xl'>Exploring NSS</h1>
                <hr className='text-center md:w-1/3 w-2/3 border-2 border-black mt-2' />
            </div>

            <div className='flex md:flex-row flex-col justify-between md:p-10 p-5'>
                <div className='relative flex flex-col w-full md:p-0 py-5'>
                    <div className='self-center md:w-2/3 w-full px-12 py-8 bg-blue-900 rounded-3xl'>
                        <img className='content-center m-auto md:w-2/5 w-1/4 h-auto' src={logo} alt=".." />
                        <p className='text-justify md:text-xl text-base text-white mt-3'>In 2020, Netaji Subhas University of Technology implemented the National service scheme (NSS) as a part of the academic programs. Since its execution NSS NSUT Cell has been consistently working on ways to improve society and pave a path for a bright future for the next generation.The cell continuously involved activities ranging from cleanliness and survey drives in the university-adopted villages to conducting yoga workshops for the overall development of society.</p>
                    </div>
                </div>
                <div className='relative flex flex-col w-full items-center'>
                    <div className='m-x-auto w-4/5'>
                        <h1 className='text-center md:text-4xl text-xl leading-loose'>Our Vision</h1>

                        <p className='text-justify md:text-xl text-base'>We at NSS NUT are a tandem of motivated and spirited young individuals who render their services to the nation in versatile domains. NSS believes in carving young minds into leaders who sharpen their personalities working at the ground level. Over the years NSS NUT Cell has executed initiatives ranging from Camps, Drives to Community welfare projects. NSS NUT Cell has implemented projects to work in a variety of domains involving Education, Mental health, and Skills with an exemplary work record which, ipso-facto, has been awarded appreciation over the years. It gives volunteers immense pride to implement their skills whether on the technical front or the design and witness them making an impact in the community.<br />NSS NUT Cell strives to upkeep the legacy of over 52 years rendering the service to the nation, living up to the motto- "Not me but You".</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
