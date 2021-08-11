import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SocialLinks() {

    const links = [{link:"#",img:"/images/gmail.svg"},{link:"#",img:"/images/twitter.svg"},{link:"#",img:"/images/github.svg"},{link:"#",img:"/images/linkedIn.svg"},{link:"#",img:"/images/call.svg"}]

    return (
        <div className="flex gap-6 justify-center mt-10">
            {
                links.map(link=>(
                        <div className="hover:animate-bounce h-10 w-10">
                            <Link href={link.link}><a>
                                <img src={link.img} alt="link" height="30px" width="30px"/>
                                </a></Link>
                        </div>
                ))
            }
        </div>
    )
}

export default SocialLinks
