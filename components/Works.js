import React from 'react'
import HeadText from './HeadText';
import Card from './Card';

function Works() {
    return (
        <section id="works" className="flex flex-col p-10" >
          <HeadText text="Works" color="black" />
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



export default Works
