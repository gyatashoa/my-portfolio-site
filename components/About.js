import Link from 'next/link'
import React from 'react'
import AboutMeCard from './AboutMeCard'
import HeadText from './HeadText'
import SocialLinks from './SocialLinks'

function About() {
    return (
        <section id="about" className="pt-10" >
            <div className="pb-10 mb-10">
                <HeadText color="black" text="About Me"/>
                <div className="text-center">
                    <AboutMeCard/>
                    <div className="mt-11">
                        <Link href="#"><a className="bg-[#1C9841] duration-700 hover:bg-[#083f26] pt-2 text-white pb-2 pl-24 pr-24 rounded-full">My Resume</a></Link>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
