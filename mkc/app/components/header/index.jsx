import React from "react";

export function Header(){
  return(
    <header className="bottom-0 left-0 w-full bg-cyan-800 text-white">
    <div className="flex justify-between items-center">
      <div>
        <ul className="space-y-2 ml-6 mb-6 mt-6">
          <li className="text-4xl font-semibold text-gray-200">Hakkımızda</li>
          <li className="text-3xl font-semibold text-gray-200">Çözümlerimiz</li>
          <li className="text-2xl font-semibold text-gray-200">İletişim</li>
        </ul>
      </div> 
    </div>
    <div className="flex justify-between items-center bg-cyan-900 h-20">
      <p className="font-semibold text-gray-400 ml-6">
        Copyright © 2022. Tüm Hakları Saklıdır.
      </p>
    </div>
  </header>
  )
    
}
