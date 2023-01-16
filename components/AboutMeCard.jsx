import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export default function AboutMeCard() {
    
    const text = `
        enthusiastic junior developer with broad technical exposure, bringing professionalism and dedication to the web and mobile development project team. Quickly grasps new technical skills and concepts to deliver under tight deadlines.
    `
    
    return (
        <Card>
            <Img><Image className="rounded-full" layout="fill" src="/images/me.jpeg"/></Img>
            <p className="pt-24 pl-8 pr-8 pb-8 text-lg">{text}</p>
        </Card>
    )
}

const Img = styled.div`
        position: absolute;
        height: 10em;
        top: -5em;
        left: calc(50% - 5em);
        width: 10em;
`

const Card = styled.div`

    position: relative;
    margin: auto;
    width: 40vw;
    border-radius: 15px;
    margin-top: 130px;
    box-shadow: 1px 1px 6px rgba(0,0,0,.2);

    

    @media only screen and (max-width: 1024px) {
    &{
            width: 60vw;
        }
    }

    @media only screen and (max-width: 768px) {
    &{
            width: 80vw;
        }
    }
`
