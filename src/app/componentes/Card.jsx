"use client"

import { useEffect, useState } from "react";
import CardInfo from "./CardInfo";


export default function Card({ card }) {

    const [showInfo, setShowInfo] = useState(false);

    function togleInfo() {
        setShowInfo(!showInfo)
    }

    // function efecto() {
    //     console.log("useEffet activado");
    // }

    // useEffect(efecto, [])

    // function openForm() {
    //     setShowInfo(!showInfo)
    //     // document.getElementById("myForm").style.display = "block";
    // }

    // function closeForm() {
    //     document.getElementById("myForm").style.display = "none";
    // }

    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 overflow-hidden rounded border border-solid m-1 p-2
         bg-gray-400 hover:bg-gray-600 active:bg-gray-700 w-56 h-72 cursor-pointer shadow-lg shadow-gray-500"
            onClick={togleInfo}>
            <div className="rounded border border-solid m-1 p-2">
                <h1>{card.title}</h1>
            </div>
            <div className="rounded border border-solid m-1 p-2 overflow-y-auto">
                <p>{card.content}</p>
            </div>
            <div className="rounded border border-solid m-1 p-2">
                <p>{card.foot}</p>
            </div>
            {showInfo && <CardInfo title={card.title} content={card.content} foot={card.foot} />}
        </div >
    )
}