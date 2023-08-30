import styles from './styles.module.css'

export default function HuespedesPage() {
    //(alias) const styles: {readonly[key: string]: string;}

    // (alias); const styles: { readonly [key: 'string']: 'string' }
    var stylesdsdfsdfsdf = [styles.sombra, styles.otro]

    var flexCol = { display: 'flex', flexDirection: 'column' }
    var FlexRow = { display: 'flex', flexDirection: 'row' }
    var centrarFlex = {
        display: 'flex',
        flexDirection: 'row'
    }

    var grid = { display: 'grid' }

    var centrarme = { margin: '0 auto' }

    var border = (width = 1, radius = 3, style = 'solid', color = 'black') => {
        return { borderWidth: + width + 'px', borderRadius: + radius + 'px', borderStyle: + style, borderColor: + color }
    }

    /**
     * 
     * @param {*} value numero
     * @param {*} unidad string con la unidad, puede ser px, em, %, rem
     * @returns string con la cadena para aplicar margenes en un elemento.
     */
    var m = (value, unidad) => { return { margin: + value + unidad } }
    var p = (value, unidad) => { return { padding: + value + unidad } }

    var posSelf = () => { return { display: 'relative' } }
    var posAsc = () => { return { display: 'absolute' } }
    var posScreen = () => { return { display: 'fixed' } }

    var pos = (top, bottom, left, right, unidad = 'px') => {
        var a = {}
        if (top >= 0)
            a = { ...a, top: + top + unidad }
        if (bottom >= 0)
            a = { ...a, bottom: + bottom + unidad }
        if (left >= 0)
            a = { ...a, left: + left + unidad }
        if (right >= 0)
            a = { ...a, right: + right + unidad }

        return { ...a }
    }
    var postl = (top, left, unidad = 'px') => {
        var a = {}
        if (top >= 0)
            a = { ...a, top: + top + unidad }
        if (left >= 0)
            a = { ...a, left: + left + unidad }

        return { ...a }
    }
    var postr = (top, right, unidad = 'px') => {
        var a = {}
        if (top >= 0)
            a = { ...a, top: + top + unidad }
        if (right >= 0)
            a = { ...a, right: + right + unidad }

        return { ...a }
    }
    var posbl = (bottom, left, unidad = 'px') => {
        var a = {}
        if (bottom >= 0)
            a = { ...a, bottom: + bottom + unidad }
        if (left >= 0)
            a = { ...a, left: + left + unidad }

        return { ...a }
    }
    var posbr = (bottom, right, unidad = 'px') => {
        var a = {}
        if (bottom >= 0)
            a = { ...a, bottom: + bottom + unidad }
        if (right >= 0)
            a = { ...a, right: + right + unidad }

        return { ...a }
    }

    var size = (width, height, unit = 'px') => {
        var w = { width: 'auto' }
        if (width >= 0) {
            if (height === 'full') {
                w = { width: '100%' }
            } else {
                w = { width: width + unit }
            }
        }

        var h = { height: 'auto' }
        if (height === 'full') {
            h = { height: '100%' }
        } else {
            if (height >= 0) {
                h = { height: height + unit }
            }
        }

        return { ...w, ...h }
    }
    var width = (width, unit = 'px') => {
        var w = { width: 'auto' }
        if (width >= 0) {
            if (height === 'full') {
                w = { width: '100%' }
            } else {
                w = { width: width + unit }
            }
        }

        return { ...w }
    }
    var height = (height, unit = 'px') => {
        var h = { height: 'auto' }
        if (height === 'full') {
            h = { height: '100%' }
        } else {
            if (height >= 0) {
                h = { height: height + unit }
            }
        }

        return { ...h }
    }

    var shadowBox = (horizontal, vertical, blur, color, inset = false) => {

    }

    var shadowText = () => {

    }

    var bgrgba = (red, green, blue, alfa) => { return { backgroundColor: rgba(red, green, blue, alfa) } }
    // color plata: #C0C0C0 / RGBA 192, 192, 192, 1
    // color oro: #D4AF37 / RGBA 212, 175, 55, 1
    // color bronce: #CD7F32 / RGBA 205, 127, 50, 1
    var foreColor = (red, green, blue, alfa) => { return { foreColor: rgba(red, green, blue, alfa) } }
    var textColor = (red, green, blue, alfa) => { return { color: rgba(red, green, blue, alfa) } }

    // var div = abrirDiv(s)

    var uno = { ...posAsc, ...pos(-1, 10, -1,), ...size(100, 100, '%') }
    console.log(uno);


    return (
        // <div className="absolute top-16 h-56 w-full bg-white flex items-center justify-center">
        <>
            <div id='cero' style={{ ...centrarme, ...border, ...m(5, 'px'), ...p(5, 'px') }}>
                <div id='uno' style={{ position: 'absolute', top: '100px', width: '100%', height: '500px', backgroundColor: 'white', ...m(5, 'px'), ...p(5, 'px') }}>
                    {/* <div className="absolute px-10 px-4 rounded bg-red-600 border-black border-2 " > */}
                    <div id='dos' style={{ width: '50%', height: '80%', margin: '0 auto', backgroundColor: 'red' }}>
                        <div id='tres' style={{ width: '80%', height: '50%', margin: '0 auto', backgroundColor: 'yellow', color: 'black', ...border }}>Primer div</div>
                        <div id='cuatro' style={{ width: '80%', height: 'auto', margin: '0 auto', backgroundColor: 'blue', display: 'flex', flexDirection: 'column', ...border }}>
                            <center>

                                <h1>Esta es la pagina de HUESPEDES 1</h1>
                                <h1>Esta es la pagina de HUESPEDES 2</h1>
                                <h1>Esta es la pagina de HUESPEDES 3</h1>
                                <h1>Esta es la pagina de HUESPEDES 4</h1>
                                <h1>Esta es la pagina de HUESPEDES 5</h1>
                                <h1>Esta es la pagina de HUESPEDES 6</h1>
                                <h1>Esta es la pagina de HUESPEDES 7</h1>

                            </center>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

function div(style) {
    var s = [{ position: absolute }]

    return (
        <div style={s}>

        </div>
    )
}