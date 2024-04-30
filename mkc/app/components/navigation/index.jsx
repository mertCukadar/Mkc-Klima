import React from "react";
import Image from "next/image";
import Link from "next/link";


export function Navigation(){
    return(
        <nav className="flex justify-between items-center  bg-cyan-950 shadow-lg p-5 text-white hover:bg-white hover:text-black">
        <div className="border-black border-spacing-2 border-solid">
        <Image src="/logo.jpeg" width={200} height={200} />
        </div>
        <div className="flex ">
          <ul className="flex space-x-5">
            <Link className="font-semibold"
                href="/aboutUs">Hakkımızda</Link>
            <Link className="font-semibold"
                href="/solutions">Çözümlerimiz</Link>
          </ul>
        </div>
        <div className="px-5 mx-5 bg-cyan-800 rounded-full h-10 flex align-middle items-center text-white hover:bg-slate-300 hover:text-black">
          <Link href="/contact">İletişim</Link>
        </div>
      </nav>
    )
}