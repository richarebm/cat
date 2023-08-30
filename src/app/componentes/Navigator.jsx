export default function Navigator() {
    // <div className="fixed w-full bg-lime-300 text-center">
    {/* <div className="fixed w-full content-center text-center justify-center place-items-center items-center self-center bg-lime-300"> */ }
    // <p>extoy fixed</p>
    return (
        <>
            {/* <ul className="fixed w-full top-0 flex flex-wrap bg-cyan-500 list-none m-0 p-0">
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black w m-2 p-2 text-center"><a href="">Inicio</a></li>
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black m-2 p-2 self-center"><a href="">Clientes</a></li>
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black m-2 p-2 justify-center"><a href="">Ayuda</a></li>
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black m-2 p-2 items-center"><a href="">Configuración</a></li>
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black m-2 p-2 content-center"><a href="" className="center">Ayuda</a></li>
                <li className="pt-2 pr-20 text-xl bg-lime-300 hover:bg-lime-500 active:bg-lime-700 rounded border-solid border border-black m-2 p-2"><a href="" className="text-center">Ayuda</a></li>
            </ul> */}
            {/* <div className="fixed w-full top-0 flex flex-wrap bg-cyan-500 list-none m-0 p-0 justify-end"> */}
            <div className="asc-nostatic top-auto bottom-0 right-0 flex flex-row flex-nowrap h-7 overflow-hidden">
                {/* <a href="" className="m-2 py-1 px-5 text-xl text-center rounded border border-solid border-black bg-blue-300 hover:bg-blue-500 active:bg-blue-700">Inicio</a> */}
                <a href="" className="px-5 text-center text-blue-400 hover:text-blue-700">Inicio</a>
                <a href="clientes" className="px-5 text-center text-blue-400 hover:text-blue-700">Clientes</a>
                <a href="" className="px-5 text-center text-blue-400 hover:text-blue-700">Configuración</a>
                <a href="" className="px-5 text-center text-blue-400 hover:text-blue-700">Ayuda</a>
                <a href="huespedes" className="px-5 text-center text-blue-400 hover:text-blue-700">Huespedes</a>
            </div>
        </>
    )
    // </div>
}