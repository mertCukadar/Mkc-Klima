'use client'
import React , {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";


export function Navigation(){

  const [nav , setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
    




    return(
        <nav className="flex justify-between items-center  bg-white shadow-lg p-5 text-black">
       
        <div className=" border-black border-spacing-2 border-solid ">
          {!nav && (
            <Image src="/logo.jpeg" width={150} height={150} alt="logo" />
          )}
        </div>
        <div className="flex ">
          <ul className="hidden md:flex space-x-5">
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="/aboutUs">Hakkımızda</Link>
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="#solutions">Çözümlerimiz</Link>
          </ul>
        </div>
        <div onClick={handleNav} className="flex md:hidden">
          {nav ? <MdMenuOpen size={35} /> : <MdMenu size={35} />}
        </div>
        {nav && (
          <div className="flex flex-row overflow-auto md:hidden">
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="/aboutUs">Hakkımızda</Link>
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="#solutions">Çözümlerimiz</Link>
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="/contact">İletişim</Link>
          </div>
        )}
        <div className="hidden px-5 mx-5 bg-cyan-800 rounded-full h-10 md:flex align-middle items-center text-white hover:bg-slate-300 hover:text-black">
          <a href="/contact">İletişim</a>
        </div>
      </nav>
    )
  }