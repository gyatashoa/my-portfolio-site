import React from 'react'
import Link from 'next/link'

function SocialLinks() {

    const links = [{link:"mailto: felixasamoah539@gmail.com",img:"/images/gmail.svg"},{link:"https://www.twitter.com/_mr_felix",img:"/images/twitter.svg"},{link:"https://github.com/gyatashoa",img:"/images/github.svg"},{link:"https://www.linkedin.com/in/asamoah-yeboah-felix-742594170/",img:"/images/linkedIn.svg"},{link:"tel:+233504826799",img:"/images/call.svg"}]

    return (
        <div className="flex gap-6 justify-center mt-10">
            {
                links.map((link,index)=>(
                        <div key={index} className="hover:animate-bounce h-10 w-10">
                            <Link href={link.link}><a target="_blank">
                                <img src={link.img} alt="link" height="30px" width="30px"/>
                                </a></Link>
                        </div>
                ))
            }
        </div>
    )
}

export default SocialLinks
