import React from 'react'
import styled from 'styled-components'
import Card from './Card';

function Works() {
    return (
        <section id="works" className="flex flex-col p-10" >
          <H2Wrapper><h2 className="text-4xl pt-5">Works</h2></H2Wrapper>
          <div className="mt-5 mb-5 flex flex-wrap">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section >
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
        background-color: black;
        border-radius: 22%;
    }
`

export default Works
