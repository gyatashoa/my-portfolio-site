import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Bg id="home">
            <div className="text-white">
                <h3 className="text-5xl" >Hi</h3>
                <p className="text-xl font-light w-80">
                    Am Asamoah Yeboah Felix,
                    a software developer and 
                    a computer science student.
                </p>
            </div>
        </Bg>
    )
}

const Bg = styled.section`
    background-image: url('images/header.jpg');
    background-color: rgba(0,0,0,.8);
    background-blend-mode: darken;
    background-size: cover;
    min-height: 85vh;
    display: flex;
    min-width: 100%;
    align-items: center;
    justify-content: center;
`

export default Header
