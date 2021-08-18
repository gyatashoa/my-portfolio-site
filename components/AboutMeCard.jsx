import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export default function AboutMeCard() {
    
    const text = `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
