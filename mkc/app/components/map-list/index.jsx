import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "../map";

export function MapList(props){
    return(
      
            <div className="flex flex-row items-center justify-center border-2 border-cyan-950  text-cyan-900 rounded-lg shadow-xl space-y-3 m-5 hover:shadow-2xl">
                <Map dest = {props.mapDestName}/>
            </div>
       
       
    )
}