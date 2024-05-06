import React from "react";
import { MdOutlineEngineering } from "react-icons/md";

export function SolutionsCard(props){
    return(
            <div className="flex flex-col items-center justify-center p-5  border-2 border-cyan-950  text-cyan-900 rounded-lg shadow-xl space-y-3 m-5 hover:shadow-2xl hover:bg-cyan-900 hover:text-white">
                <MdOutlineEngineering className="text-9xl" />
                <h1 className="text-4xl font-semibold">{props.hizmetName}</h1>
                <p>{props.hizmetDescription}</p>
            </div>
    )
}