import React from 'react'
import styled from 'styled-components'
import HeadText from './HeadText'
import Skillset from './Skillset'

function Skills() {
    return (
        <Section id="skills" className="bg-[#020509] pt-20  flex align-middle flex-col">
            <HeadText color="white" text="Skills"/>
            <div className="m-auto pb-20 flex flex-wrap gap-40 pt-10">
                <Skillset header="Languages" items={['Dart','JavaScript','Java']}/>
                <Skillset header="Frameworks"  items={['Flutter','React','Express']} />
                <Skillset header="Other Tools" items={['Git/Github','Photoshop','Adobe Xd']} /> 
            </div>
        </Section >
    )
}

const Section = styled.section`
    /* height: 500px; */
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    border-top-left-radius: 150px;
    /* &::before{
        height: 100px;
        width: 100px;
        content: '';
        background-color: white;
        position: absolute;
    }

    &::after{
        height: 200px;
        position: absolute;
        width: 200px;
        border-radius: 50%;
        left: 0px;
        content: '';
        background-color: #020509;
    } */
`

export default Skills
