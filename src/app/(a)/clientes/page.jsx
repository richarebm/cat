import Card from "../../componentes/Carrousel";
import CardImg from "../../componentes/CardImg";
import Carrousel from "../../componentes/Carrousel";

function infoClick() {
    console.log("click");
}

export default function ClientesPage() {
    return (
        // <div className="relative top-14  box-border" style={{ backgroundColor: '#ca1d1f' }}>
        <div className="relative top-14  box-border" >
            <div id="header" className="relative w-full">
                <div className="border border-solid rounded ">
                    <img src="netflix1.jpg" alt="Imagne Frontal" width={"100%"} height={"100%"} />
                </div>
                <div className="absolute bottom-10 left-10 ">
                    <h1>Tarjetas en flex</h1>
                </div>
            </div>

            <Carrousel img={true} numCards={9} title={'Primer Carrusel'} />
            <Carrousel img={true} numCards={8} title={'Segundo Carrusel'} />
            <Carrousel img={false} numCards={9} title={'Tercer Carrusel'} />

            {/* <div id="info" className="hidden">
                <div onClick={infoClick()}></div>
                <Card />
            </div> */}
            <div id="footer" className="w-full m-0 p-3 rounded border border-solid bg-black text-gray-500">
                <h1>Este es el pie de pagina</h1>
                <div className="flex flex-row justify-around">
                    <div className="border rounded py-1 px-3">
                        <p>En este sitio se puede poner la informacion de contacto.</p>
                    </div>
                    <div className="border rounded py-1 px-3 cursor-pointer">
                        <p>En este sitio se puede poner la informacion de contacto.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

