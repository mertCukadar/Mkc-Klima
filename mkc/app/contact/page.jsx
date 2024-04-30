'use client'
import React from "react";
import GoogleMapReact from 'google-map-react';
import Map from "../components/map";
import { Request } from "../components/request";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className='flex p-5 md:flex-row flex-col justify-center items-center '>
            
          <div>
              <Request />
          </div>


            <div className="w-full p-5 rounded-2xl">
                <Map />
            </div>
        
    </div>
 
  );
}
