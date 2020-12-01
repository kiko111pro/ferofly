import React from 'react'
import "./body.css"
import Home from "./bodycomponents/Home"
import About from './bodycomponents/About'
import Rooms from "./bodycomponents/Rooms"
import Services from "./bodycomponents/Services"
import Gallery from "./bodycomponents/Gallery"
import Things from "./bodycomponents/Things"


function Body() {
    return (
        <div className="body container text-center">
            <Home />
             <About />

             <Rooms />
              <Services />
             <Gallery />
             <Things />
        </div>
    )
}

export default Body
