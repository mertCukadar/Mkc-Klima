import React from "react";

export function Header(){
  return(
    <header className="bottom-0 left-0 w-full bg-cyan-800 text-white">
    <div className="flex justify-between items-center">
      <div>
        <ul className=" space-y-3 ml-10 mt-2 mb-2">
          <li className="text-3xl font-semibold text-gray-200 ">COZUMLERIMIZ</li>
          <li className="text-3xl font-semibold text-gray-200 ">HAKKIMIZDA</li>

          <li className="text-3xl font-semibold text-gray-200 ">ILETISIM</li>
        </ul>
      </div> 
      <div className = "bg-cyan-900 w-3/4 h-40 rounded-tl-full">

      </div>
    </div>
    <div className="flex justify-between items-center bg-cyan-900 h-20">
      <p className="font-semibold text-gray-400 ml-10">
        Copyright © 2022. Tüm Hakları Saklıdır.
      </p>
    </div>
  </header>
  )
    
}
