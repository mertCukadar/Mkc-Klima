import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export function Footer(){
  return(
    <header className="left-0 w-full bg-cyan-800 text-white">

    <div className="flex flex-col justify-between items-center bg-cyan-900 h-20">
      <p className="font-semibold text-white mt-3">
        Copyright © 2022. Tüm Hakları Saklıdır.
      </p>
      <div className="flex space-x-3  mb-3">

        <Link href="/contact" className="flex items-center text-white hover:text-cyan-800 ">
          <FaMapMarkerAlt className="mr-2" />
          Adresimiz
        </Link>

        <a href="tel:+905332546179" className="flex items-center text-white hover:text-cyan-800 ">
          <FaPhone className="mr-2" />
          0533 254 61 79
        </a>
      </div>
    </div>
  </header>
  )
    
}
