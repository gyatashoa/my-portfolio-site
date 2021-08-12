import React from 'react'

function Card() {
    return (
        <div className="w-80 m-auto mb-8">
            <figure>
                <picture>
                    <img  src="https://cdn.akamai.steamstatic.com/steam/apps/1506510/capsule_616x353.jpg" alt="The Ramp game promotional image"/>
                </picture>
                <figcaption>
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/1506510/capsule_616x353.jpg" aria-hidden="true"/>
                    <section className="adaptive-glass pt-7 pb-7">
                    <h4 className="text-center">Eyex UI Clone</h4>
                    {/* <date>Tue, August 3, 2021 9:05 AM PDT</date> */}
                    </section>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card
