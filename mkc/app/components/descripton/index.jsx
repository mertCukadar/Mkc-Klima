import Link from "next/link";
import React from "react";

export function Description(){
    return(
    <div className='flex flex-col justify-center'>
        <div className='p-5 flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-center bg-cyan-900 rounded-lg p-5'>
            <div className='flex'>
                <h1 className=' text-4xl font-semibold mb-3'>MKC KLIMA</h1>
            </div>

            <div className='flex  flex-col justify-center mb-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex maxime fugiat aliquam minus cupiditate! Voluptate, debitis ducimus doloribus veritatis blanditiis unde rerum ea nesciunt obcaecati repudiandae adipisci iste tempora dolorum saepe soluta perferendis. Itaque natus saepe perspiciatis pariatur velit voluptatum doloremque, quaerat ex quas, amet expedita, beatae corporis dolor deserunt. Saepe, deleniti. Itaque provident aut, amet deleniti explicabo vitae reprehenderit repudiandae et ad vero nulla minima eos totam commodi error, veritatis ratione omnis cupiditate! Eaque magnam minima voluptates beatae magni porro, veniam reiciendis suscipit, commodi dolor neque nam aspernatur esse sapiente iste unde! Neque fuga incidunt sint temporibus, sequi laboriosam!</p>
            </div>

            <div className="flex items-center">
                <Link href="/contact">
                    <p className=" text-white p-3 rounded-xl border-cyan-400 border-2 cursor-pointer hover:bg-cyan-400 hover:text-cyan-900">İletişim</p>
                </Link>
            </div>
           

            </div>

          

        </div>
    </div>
    )
}