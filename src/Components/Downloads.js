import React from 'react'
import temp from '../assets/chhavi.jpg'
import temp2 from '../assets/group.JPEG'
import DownloadCard from './DownloadCard'

export default function Downloads() {
    const details = [
        {
            img: temp,
            link: "https://www.google.com"
        },
        {
            img: temp2,
            link: "https://www.google.com"
        },
        {
            img: temp,
            link: "https://www.google.com"
        },
    ]
    return (
        <div className='my-6'>
            <div>
                <div className="md:w-5/6 m-auto grid md:grid-cols-3 gap-6 md:h-96">

                    {/* <DownloadCard/>

                    <DownloadCard/>

                    <DownloadCard/> */}
                    {
                    details.map((object, i) => {
                        return (<DownloadCard image={object.img} link={object.link} key={i} />)
                    })
                }
                    
                </div>
            </div>
        </div>
    )
}
