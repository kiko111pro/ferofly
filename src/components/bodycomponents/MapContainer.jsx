import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const location ={
    name: "Location 1",
    location: { 
      lat: 41.3954,
      lng: 2.162 
    }}

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3954,
      lng: 2.162 
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyClUXrEKyMnx8ZqKg1gOEPh2Keo1ECaeBk'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={location}/>
          </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;