
import styled from "styled-components"

import React from 'react'

function HeadText({text,color}) {
    return (
           <H2Wrapper color={color}>
               <h2 className={`text-4xl ${color === 'black' ?'text-black': `text-${color}`} pt-5`}>{text}</h2>
           </H2Wrapper> 
     
    )
}


const H2Wrapper = styled.div`
    position: relative;
    width: fit-content;
    margin: auto;
    &::after{
        content: '';
        position: absolute;
        bottom: -2.5px;
        left: 2px;
        width: 50px;
        height: 3px;
        background-color: ${props => props.color === "black" ?'black':'white'};
        border-radius: 22%;
    }
`


export default HeadText
