import React, { useState } from 'react'
import logo from '../assets/NSSLOGO.PNG';
// import azadi from '../assets/azadi.jpg'
// import Dropdown from './Dropdown';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-start items-center bg-white text-black font-poppins text-6xl z-50 py-1 px-8'>

            <div className='flex justify-start w-1/4 z-50'>
                <Link to="/"><img src={logo} className=" w-1/6" alt="NSS NSUT" /></Link>
                {/* <h4>National Service Scheme</h4>
                <h4>Netaji Subhas University of Technology</h4> */}
            </div>
            <ul className={`md:flex hidden text-xl gap-8 font-normal`}>
                <li className='cursor-pointer '>
                    <Link to="/">Home</Link>
                </li>
                <li className='cursor-pointer z-20 '>

                    {/* <Dropdown/> */}
                    <Dropdown label="Initiatives" inline={true}>
                        <Dropdown.Item> <Link to="/nic">NIC'22</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/events">Events</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/projects">Projects</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/achievements">Achievements</Link> </Dropdown.Item>
                        <Dropdown.Item> Media Coverage </Dropdown.Item>
                    </Dropdown>
                    {/* <div className="relative inline-block text-left">
                        <div>
                            <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Options
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1" role="none">
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</Link>
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</Link>
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</Link>
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link to='/' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</Link>
                            </div>
                        </div>
                    </div> */}

                </li>
                <li className='cursor-pointer'><Link to="/team">Team</Link></li>
                <li className='cursor-pointer'><Link to="/gallery">Gallery</Link></li>
                <li className='cursor-pointer'><Link to="/updates">Updates</Link></li>
                <li className='cursor-pointer'><Link to="/downloads">Downloads</Link></li>
            </ul>
            <ul className={`z-50 md:hidden bg-white absolute w-full h-fit top-0 bottom-0 left-0 py-16 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                
                <li className='px-24 w-fit content-center'>
                    <Link to="/" onClick={()=>setOpen(false)}><img src={logo} alt="NSS NSUT" className='w-2/5' /></Link>
                </li>

                <li className='py-7 px-24 text-lg'>
                    <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
                </li>
                <li className='py-7 px-24 text-lg z-20 '>

                    {/* <Dropdown/> */}
                    <Dropdown label="Initiatives" inline={true} className='w-full px-24'>
                        <Dropdown.Item> <Link to="/nic" onClick={()=>setOpen(false)}>NIC'22</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/events" onClick={()=>setOpen(false)}>Events</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/projects" onClick={()=>setOpen(false)}>Projects</Link> </Dropdown.Item>
                        <Dropdown.Item> <Link to="/achievements" onClick={()=>setOpen(false)}>Achievements</Link> </Dropdown.Item>
                        <Dropdown.Item> Media Coverage </Dropdown.Item>
                    </Dropdown>

                </li>
                <li className='py-7 px-24 text-lg'><Link to="/team" onClick={()=>setOpen(false)}>Team</Link></li>
                <li className='py-7 px-24 text-lg'><Link to="/gallery" onClick={()=>setOpen(false)}>Gallery</Link></li>
                <li className='py-7 px-24 text-lg'><Link to="/updates" onClick={()=>setOpen(false)}>Updates</Link></li>
                <li className='py-7 px-24 text-lg'><Link to="/downloads" onClick={()=>setOpen(false)}>Downloads</Link></li>
            </ul>
            <div className='z-50 md:hidden flex justify-end text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
                <ion-icon name={!open ? 'menu-outline' : 'close-outline'}></ion-icon>
            </div>
            {/* <div className='md:flex hidden justify-end w-1/4'>
                <img src={azadi} className="max-w-full h-auto w-24" alt="Azadi ka Mohotsav" />
            </div> */}
        </div>
    )
}
