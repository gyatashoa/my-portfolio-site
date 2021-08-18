import React from 'react'
import HeadText from './HeadText';
import Card from './Card';

function Works({projects}) {
    return (
        <section id="works" className="flex flex-col p-10" >
          <HeadText text="Works" color="black" />
          <div className="mt-5 mb-5 flex justify-around flex-wrap">
           {projects.map(e => (<div key={e.id}><Card data = {e} /></div>))}
          </div>
        </section>
    )
}



export default Works
