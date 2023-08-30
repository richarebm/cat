"use client"

import { useState } from "react"
import CardInfo from "./CardInfo"

export default function CardImg({ card }) {
    const [showInfo, setShowInfo] = useState(false)

    function togleInfo() {
        setShowInfo(!showInfo)
    }

    return (
        <div className="relative w-56 h-72 flex-grow-0 flex-shrink-0 overflow-hidden rounded border border-solid shadow-lg shadow-green-500
         border-black mx-2 p-0 bg-gray-500 hover:bg-gray-700 active:bg-gray-900 text-red-900 font-extrabold cursor-pointer"
            onClick={togleInfo}>
            <div className="flex-grow-0 flex-shrink-0 w-full h-full m-0 p-1 overflow-auto">
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo incidunt expedita nostrum tenetur voluptatum porro maiores aliquam corrupti. Excepturi, aut quia? Cumque, perferendis maiores! Reprehenderit voluptatibus exercitationem sed ex numquam?</p> */}
                <img src={card.content} alt="Logo" className="w-full h-full" />
            </div>
            <div className="absolute top-2 left-4 m-1 p-2 bg-blue-50">
                <h4>{card.title}</h4>
            </div>
            <div className="absolute bottom-2 left-4 m-1 p-2 bg-blue-50">
                <p>{card.foot}</p>
            </div>
            {showInfo && <CardInfo title={card.title} img={card.content} foot={card.foot} />}
        </div>
    )
}
