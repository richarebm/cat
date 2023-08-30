import Carrousel from "./Carrousel"

export default function CardInfo(card) {

    let c = card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content
    c += card.content

    return (
        <div className="fixed w-full h-screen top-0 left-0 z-20 flex justify-center items-center bg-black/80">

            <div className="relative w-4/5 h-4/5 flex justify-center items-center flex-col flex-grow-0 flex-shrink-0 bg-black/80 overflow-y-auto">

                <div className="w-full m-1 p-2 flex flex-col overflow-hidden overflow-x-hidden overflow-y-auto">
                    <div className="w-full m-1 p-2 inline-flex justify-between">
                        <h1>{card.title}</h1><span>X</span>
                    </div>
                    <div className="relative w-full m-1 p-1 overflow-y-auto">
                        {card.img ?
                            <img src={card.img} alt="Imagen" className="w-full h-full" />
                            :
                            <p >{c}</p>}
                    </div>
                    <div className="m-1 p-2 ">
                        <p>{card.foot}</p>
                    </div>
                </div>
                <div className="">

                    <Carrousel img={true} numCards={3} />
                </div>
            </div>
        </div>
    )
}