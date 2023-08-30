import '../globals.css'
import Navigator from '../componentes/Navigator'
import Search from '../componentes/Search'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Presentación',
    description: 'Aplicacion para presentar informacion en carrusel y ventana emergente presentar informacion.',
}

export default function ClientesLayout({ children }) {
    return (
        <html lang="es">
            <body className='bg-black'>

                <div className='fixed top-0 w-full z-10 bg-black flex justify-center'>
                    <div className='w-4/5'>

                        <div className='relative flex flex-row justify-between'>

                            <div>
                                {/* <Image */}
                                <img
                                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src='netflix_PNG10.png'
                                    // src="../../../public/logo.svg"
                                    alt="App Logo"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>
                            <div className='flex flex-row flex-nowrap align-text-bottom'>
                                <div>
                                    <Search />
                                </div>
                                <div>
                                    <Navigator />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {children}
            </body>
        </html >
    )
}