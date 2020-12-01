import React from 'react'
import Contact from "./bodycomponents/Contact"
import Map from "./bodycomponents/MapContainer"

function Footer() {
    return (
        <div className='footer'>
            <Contact />
            < Map />
            <small className='mw-100 py-3 footer_copyright'>&copy; 2020 FeroFly. All Rights Reserved.</small>
        </div>
    )
}

export default Footer
