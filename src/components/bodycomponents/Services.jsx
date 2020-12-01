
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import React from 'react'
import "./bodystyles.css"

function Services() {
    return (
        <div className="services my-5">
            <h1 className="text-center">Services</h1>
            <div className="d-flex services_cards justify-content-center flex-wrap">
            <Card logo={<FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='Free Breakfast'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
            <Card logo={<FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='Garden'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
            <Card logo={<FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='Pool'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
            <Card logo={<FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='Free WiFi'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
            <Card logo={<FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='Daily Housekeeping'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
            <Card logo={< FreeBreakfastIcon style={{fontSize: '3.3rem'}} />}
            title='In-room Dining Service'
            para='I am a paragraph. Click here to add your own text and edit me.' 
            />
        </div>
        </div>
    )
}

export default Services

export function Card(props){
    return(
        <div className="card w-25 m-3 text-center">
            <h1 className="card_logo">{props.logo}</h1>
    <h4>{props.title}</h4>
    <p>{props.para}</p>
        </div>
    )
} 
