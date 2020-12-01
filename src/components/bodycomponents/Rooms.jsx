import React from 'react'
import "./bodystyles.css"

function Rooms() {
    return (
        <div className="rooms">
            <img className="rooms_img img-fluid" src="https://images.unsplash.com/photo-1522571606762-32233ecf9138?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt=""/>
            <div className="rooms_box">
                <h1 className="my-3">Our Rooms</h1>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt veniam maiores aut optio labore, voluptatem doloremque reprehenderit totam vel nihil id omnis molestias ea. Dolorem ipsum blanditiis iure doloribus!</p>
                <button className="header_btn mt-3">Book A Room</button>
            </div>
        </div>
    )
}

export default Rooms
