import React from "react";

export function Request(){
    return(
        <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-xl sm:max-w-lg">
        <div className="bg-cyan-800 px-10 py-10 text-center text-white">
          <p className="font-serif text-2xl font-semibold tracking-wider">Bize Ulaşın</p>
          <p className="text-center text-blue-100">Kısaca talebinizi iletiniz size en kısa sürede dönüş yapacağız</p>
        </div>
      
        <div className="space-y-4 px-8 py-10">
          <label className="block" htmlFor="name">
            <p className="text-gray-600">İsim</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-cyan-600 focus:ring-1" type="text" placeholder="İsminizi giriniz" />
          </label>
          <label className="block" htmlFor="name">
            <p className="text-gray-600">Email Adresi</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-cyan-600 focus:ring-1" type="email" placeholder="Email adresinizi giriniz" />
          </label>
          <label className="block" htmlFor="name">
            <p className="text-gray-600">Talebiniz</p>
            <textarea className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-cyan-600 focus:ring-1" type="text" placeholder="Talebinizi giriniz"></textarea>
          </label>
          <button className="mt-4 rounded-full bg-cyan-800 px-10 py-2 font-semibold text-white">Gönder</button>
        </div>
      </div>
    )
}