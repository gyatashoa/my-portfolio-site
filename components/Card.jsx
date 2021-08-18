import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Card({data}) {
    return (
        <div className="w-80 m-auto mb-8">
            <Link href={data.link??'/'}>
                <a target={data.link&&'_blank'}>
                    <figure>
                        {/* <picture>
                            <img  src={data.img} alt="The Ramp game promotional image"/>
                        </picture> */}
                        <figcaption>
                            <Image layout='fill' src="/images/capsule_616x353.jpg" />
                            <section className="adaptive-glass pt-7 pb-7">
                            <h4 className="text-center p-8">{data.name??'Project'}</h4>
                            {/* <date>Tue, August 3, 2021 9:05 AM PDT</date> */}
                            </section>
                        </figcaption>
                    </figure>
                </a>
            </Link>
        </div>
    )
}

export default Card
