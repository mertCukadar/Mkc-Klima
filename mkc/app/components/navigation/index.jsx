'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";


export function Navigation(){

    return(
        <nav className="flex justify-between items-center  bg-white shadow-lg p-5 text-black">
       
        <div className=" border-black border-spacing-2 border-solid ">
        <Image src="/logo.jpeg" width={150} height={150} />
        </div>
        <div className="flex ">
          <ul className="hidden md:flex space-x-5">
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="/aboutUs">Hakkımızda</Link>
            <Link className=" text-slate-700 px-4 py-2 rounded-full border-cyan-800 border-1 cursor-pointer hover:bg-cyan-800 hover:text-white"
                href="#solutions">Çözümlerimiz</Link>
          </ul>
        </div>
        <div className="flex md:hidden">
          <MdMenu className="text-4xl" />
        </div>
        <div className="hidden px-5 mx-5 bg-cyan-800 rounded-full h-10 md:flex align-middle items-center text-white hover:bg-slate-300 hover:text-black">
          <a href="/contact" scroll={false}>İletişim</a>
        </div>
      </nav>
    )
  }