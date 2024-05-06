'use client'
import React from "react";
import GoogleMapReact from 'google-map-react';
import Map from "../components/map";
import { Request } from "../components/request";
import { MapList } from "../components/map-list";


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


            <div className="w-full rounded-2xl">
                <MapList destName = "Ankara Ivedik" mapDestName = "MKC Klima Elektrik Otomasyon, Atatürk, Atatürk Blv. Mi Plaza No: 145 Daire: 5, 48600 Ortaca/Muğla"/>
                <MapList destName = "Muğla Ortaca" mapDestName = "Mkc Klima Elektrik Otomasyon, Serhat, 1394. Sk. No:26, 06378 Yenimahalle/Ankara"/>

            </div>
        
    </div>
 
  );
}
