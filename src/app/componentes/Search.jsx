export default function Search() {
    const buscarClick = () => {
        console.log("buscarClick");
    }

    return (
        <div className="self top-0">
            <form action="" method="post" onClick={buscarClick()}>
                <label htmlFor="txt_search">Buscar</label>
                <input type="text" name="txt_search" id="txt_serach" placeholder="Ingrese su busqueda" />
                <button type="submit" className="bg-blue-300 hover:bg-blue-500 active:bg-blue-700">Buscar</button>
            </form>
        </div>
    )
}