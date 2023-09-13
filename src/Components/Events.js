import React from 'react'
import EventTabHome from './EventTabHome'

export default function Events() {
    // const title = "NIC";
    // const description = "NIC camp mst hai bhai";
    // const imgSrc = "nic";
    const details = [
        {
            title: 'NIC',
            description: 'NIC camp mst hai bhai',
            imgSrc: 'bg-nic',
            bg: "bg-fuchsia-600/70",
            // color : "fuchsia",
            // bold : "600",
        },
        {
            title: 'plogging drive',
            description: 'gandagi bohut hai delhi me',
            imgSrc: 'bg-ploggingdrive',
            // imgSrc:'bg-plogging1',
            bg: "bg-green-700/70",
           
            // color : "cyan",
            // bold : "700",
        },
        {
            title: 'Adventure Camp Dalhousie',
            description: 'Bhalu ka area hai aaram se',
            imgSrc: 'bg-adv',
            bg: "bg-teal-700/70",
            // color : "teal",
            // bold : "700",
        },
        {
            title: 'Blood Donation Camp',
            description: 'Khooni khel',
            imgSrc: 'bg-bd',
            bg: "bg-red-800/70",
            // color : "red",
            // bold : "800",
        },
        {
            title: "sandesh at Moksha'22",
            description: 'Social awareness or what',
            imgSrc: 'bg-sandesh',
            bg: "bg-amber-500/70",
            // color : "amber",
            // bold : "500",
        },
        {
            title: 'International Yoga Day',
            description: 'survey hori bohut bhayankar',
            imgSrc: 'bg-specialcamp',
            bg: "bg-fuchsia-900/70",
            // color : "fuchsia",
            // bold : "900",
        },
        {
            title: 'Plantation drive',
            description: 'haryali bohut kam hai',
            imgSrc: 'bg-adoptedvillage',
            bg: "bg-pink-800/70",
            // color : "",
            // bold : "800",
        },
        {
            title: 'International Yoga Day',
            description: 'Yoga Karo Mast Raho',
            imgSrc: 'bg-idy',
            bg: "bg-cyan-700/70",
           
            // color : "green",
            // bold : "700",
        },
    ]
    return (
        <div className='md:grid md:grid-cols-2 flex flex-col'>
            {
                details.map((object, i) => {
                    return (<EventTabHome title={object.title} description={object.description} imgSrc={object.imgSrc} bg={object.bg} key={i} />)
                })
            }

            {/* <EventTabHome title={title} description={description} imgSrc={imgSrc}/>
            <EventTabHome title={title} description={description} imgSrc={imgSrc}/>
            <EventTabHome title={title} description={description} imgSrc={imgSrc}/>
            <EventTabHome title={title} description={description} imgSrc={imgSrc}/>
            <EventTabHome title={title} description={description} imgSrc={imgSrc}/>
            <EventTabHome title={title} description={description} imgSrc={imgSrc}/> */}
        </div>
    )
}
