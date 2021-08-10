import React from 'react'
import styled from 'styled-components'

function Works() {
    return (
        <section id="works" className=" p-10" >
          <H2Wrapper><h2 className="text-4xl text-center">Works</h2></H2Wrapper>
        </section >
    )
}

const H2Wrapper = styled.div`
    justify-self: center;
    /* justify-items: center; */
    position: relative;
    width: auto;
    &::after{
        content: '';
        position: absolute;
        bottom: -2.5px;
        left: 46.5%;
        width: 50px;
        height: 3px;
        background-color: black;
        border-radius: 22%;
    }
`

export default Works
