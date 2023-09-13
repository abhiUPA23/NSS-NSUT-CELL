import React from 'react'
import { Card } from 'flowbite-react'
import temp from '../assets/chhavi.jpg'
import temp2 from '../assets/group.JPEG'
import UpdateCard from './UpdateCard'

export default function Updates() {
    const details = [
        {
            img: temp,
            description: "this is the greatest event of all times",
            link: "https://www.google.com"
        },
        {
            img: temp2,
            description: "this is the greatest event of all times",
            link: "https://www.google.com"
        },
        {
            img: temp,
            description: "this is the greatest event of all times",
            link: "https://www.google.com"
        },
    ]
    return (
        <div className='my-5 grid gap-5'>
            <div className="md:w-5/6 m-auto grid md:grid-cols-3 gap-6 md:h-450">
                {
                    details.map((object, i) => {
                        return (<UpdateCard image={object.img} description={object.description} link={object.link} key={i} />)
                    })
                }

            </div>

        </div>
    )
}
