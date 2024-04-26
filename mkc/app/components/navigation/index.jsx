import React from "react";
import Image from "next/image";
import Link from "next/link";


export function Navigation(){
    return(
        <nav className="flex justify-between items-center bg-white">
        <Image src="/logo.jpeg" width={200} height={200} />
        <div className="flex ">
          <ul className="flex space-x-5">
            <Link className="font-semibold text-gray-700"
                href="/aboutUs">Hakkımızda</Link>
            <li className="font-semibold text-gray-700">Çözümlerimiz</li>
          </ul>
        </div>
        <div>
          <button className="px-5 mx-5 bg-cyan-800 rounded-full h-10 text-white hover:bg-slate-300 hover:text-black">İletişim</button>
        </div>
      </nav>
    )
}