import React from 'react'
import styled from 'styled-components'

function Skillset({header,items}) {
    return (
            <div className="m-auto pl-20 pr-20 text-white">
                <h2 className="pb-5 text-2xl">{header}</h2>
                <ul>
                   {items.map((item,index)=> (
                    <CustomLi  key={index} className="p-6 text-lg">
                        {item}
                    </CustomLi>
                    )
                    )}
                </ul>
            </div>
    )
}


const CustomLi = styled.li`
    position: relative;
    &::before{
        position: absolute;
        content: '';
        height: 35px;
        width: 35px;
        left: -30px;
        top: 15px;
        background-image: url('images/pin.svg');
        background-position: center;
        background-size: cover;
    }
`

export default Skillset
